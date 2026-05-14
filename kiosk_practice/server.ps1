param(
  [int]$Port = 8080,
  [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path
)

$server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
$server.Start()

$localIp = ([System.Net.Dns]::GetHostAddresses([System.Net.Dns]::GetHostName()) |
  Where-Object { $_.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork -and $_.IPAddressToString -notlike "127.*" } |
  Select-Object -First 1).IPAddressToString

Write-Host "Serving $Root"
Write-Host "This PC: http://localhost:$Port/kiosk_practice/index.html"
if ($localIp) {
  Write-Host "Other devices on the same Wi-Fi: http://$localIp`:$Port/kiosk_practice/index.html"
}

function Send-Response($stream, [int]$status, [string]$type, [byte[]]$body) {
  $statusText = if ($status -eq 200) { "OK" } else { "Not Found" }
  $header = "HTTP/1.1 $status $statusText`r`nContent-Type: $type`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  $stream.Write($body, 0, $body.Length)
}

try {
  while ($true) {
    $client = $server.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $buffer = New-Object byte[] 4096
      $count = $stream.Read($buffer, 0, $buffer.Length)
      $request = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $count)
      $line = ($request -split "`r?`n")[0]
      $parts = $line -split " "
      $requestPath = if ($parts.Length -ge 2) { [Uri]::UnescapeDataString($parts[1].TrimStart("/")) } else { "" }
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "kiosk_practice/index.html"
      }

      $fullPath = Join-Path $Root $requestPath
      $resolved = Resolve-Path -LiteralPath $fullPath -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($resolved -and $resolved.Path.StartsWith($Root)) {
        $filePath = $resolved.Path
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
        $contentType = switch ($ext) {
          ".html" { "text/html; charset=utf-8" }
          ".css" { "text/css; charset=utf-8" }
          ".js" { "application/javascript; charset=utf-8" }
          ".csv" { "text/csv; charset=utf-8" }
          default { "application/octet-stream" }
        }
        Send-Response $stream 200 $contentType $bytes
      } else {
        Send-Response $stream 404 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Not found"))
      }
    } catch {
      try { Send-Response $stream 404 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Server error")) } catch {}
    } finally {
      $client.Close()
    }
  }
} finally {
  $server.Stop()
}
