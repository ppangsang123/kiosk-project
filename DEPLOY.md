# 야외 사용을 위한 공개 배포 방법

같은 와이파이가 아니어도 접속하려면 앱 파일을 공개 웹 호스팅에 올려야 합니다. 이 앱은 `index.html`, `styles.css`, `app.js`만으로 작동하는 정적 웹앱이라 GitHub Pages 같은 무료 호스팅에 올릴 수 있습니다.

## 추천 방법: GitHub Pages

1. GitHub 계정을 만듭니다.
2. 새 저장소를 만듭니다.
   - 예시 이름: `kiosk-practice`
   - 공개 저장소로 만들어야 무료 GitHub Pages 접속이 쉽습니다.
3. 이 폴더의 파일을 저장소에 업로드합니다.
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
4. GitHub 저장소에서 `Settings`로 들어갑니다.
5. 왼쪽 메뉴에서 `Pages`를 누릅니다.
6. `Build and deployment`에서 다음처럼 설정합니다.
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. 저장하면 잠시 뒤 공개 주소가 생깁니다.
   - 예시: `https://사용자이름.github.io/kiosk-practice/`

## 더 쉬운 대안: Netlify Drop

1. Netlify에 접속합니다.
2. `kiosk_practice` 폴더를 드래그해서 업로드합니다.
3. 자동으로 공개 주소가 만들어집니다.

## 야외 활동 전 확인할 점

- 휴대폰 데이터로 접속되는지 미리 확인합니다.
- QR 코드를 만들어두면 어르신들이 주소를 직접 입력하지 않아도 됩니다.
- 각 기기의 기록은 각 브라우저에 따로 저장됩니다.
- 여러 명의 기록을 한 파일로 모으려면 활동 후 각 기기에서 `CSV 저장`을 눌러 파일을 모아야 합니다.

## 주의

현재 앱은 개인정보를 서버로 전송하지 않습니다. 대신 기록이 각 기기의 브라우저에 저장됩니다. 그래서 야외 조사에서 여러 기기를 쓰면, 기기별 CSV를 나중에 합쳐 분석해야 합니다.
