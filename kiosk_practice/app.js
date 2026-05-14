const scenarios = {
  cafe: {
    label: "카페 키오스크",
    menuTitle: "음료를 골라주세요",
    menuHint: "위의 주문 목표를 보고 같은 음료를 선택합니다.",
    menuGuide: "목표 음료 이름을 메뉴판에서 찾아 눌러보세요.",
    optionGuide: "목표에 적힌 온도, 크기, 이용 방법을 차례대로 고르세요.",
    payGuide: "목표에 적힌 결제 방법을 고르세요.",
    missions: [
      {
        menu: "americano",
        options: { temperature: "hot", size: "regular", place: "eat-in" },
        payment: "card",
        text: "따뜻한 아메리카노 1잔, 보통 크기, 매장에서 마시기, 카드 결제",
      },
      {
        menu: "latte",
        options: { temperature: "ice", size: "large", place: "takeout" },
        payment: "card",
        text: "차가운 카페라떼 1잔, 큰 크기, 포장하기, 카드 결제",
      },
      {
        menu: "tea",
        options: { temperature: "hot", size: "regular", place: "takeout" },
        payment: "cash",
        text: "따뜻한 유자차 1잔, 보통 크기, 포장하기, 현금 결제",
      },
    ],
    items: [
      { id: "americano", name: "아메리카노", price: 3000, emoji: "☕", desc: "기본 커피 메뉴" },
      { id: "latte", name: "카페라떼", price: 3800, emoji: "🥛", desc: "우유가 들어간 커피" },
      { id: "vanilla", name: "바닐라 라떼", price: 4300, emoji: "🍯", desc: "달콤한 라떼" },
      { id: "tea", name: "유자차", price: 3500, emoji: "🍵", desc: "따뜻한 과일차" },
      { id: "ade", name: "레몬에이드", price: 4200, emoji: "🍋", desc: "시원한 탄산 음료" },
      { id: "smoothie", name: "딸기 스무디", price: 4800, emoji: "🍓", desc: "차가운 과일 음료" },
    ],
    optionGroups: [
      {
        id: "temperature",
        title: "온도 선택",
        items: [
          { id: "hot", name: "따뜻하게", price: 0, desc: "뜨거운 음료로 받습니다." },
          { id: "ice", name: "차갑게", price: 500, desc: "얼음이 들어갑니다." },
        ],
      },
      {
        id: "size",
        title: "크기 선택",
        items: [
          { id: "regular", name: "보통", price: 0, desc: "기본 크기입니다." },
          { id: "large", name: "크게", price: 1000, desc: "음료 양을 늘립니다." },
        ],
      },
      {
        id: "place",
        title: "이용 방법",
        items: [
          { id: "eat-in", name: "매장에서 마시기", price: 0, desc: "자리에 앉아 마십니다." },
          { id: "takeout", name: "포장하기", price: 0, desc: "가지고 갈 수 있게 받습니다." },
        ],
      },
    ],
  },
  burger: {
    label: "햄버거 가게 키오스크",
    menuTitle: "버거를 골라주세요",
    menuHint: "위의 주문 목표를 보고 같은 버거를 선택합니다.",
    menuGuide: "목표 버거 이름을 메뉴판에서 찾아 눌러보세요.",
    optionGuide: "목표에 적힌 구성, 사이드, 음료, 이용 방법을 차례대로 고르세요.",
    payGuide: "목표에 적힌 결제 방법을 고르세요.",
    missions: [
      {
        menu: "bulgogi-burger",
        options: { set: "set", side: "fries", drink: "cola", place: "takeout" },
        payment: "card",
        text: "불고기버거 세트, 감자튀김, 콜라, 포장하기, 카드 결제",
      },
      {
        menu: "shrimp-burger",
        options: { set: "single", side: "fries", drink: "sprite", place: "eat-in" },
        payment: "cash",
        text: "새우버거 단품, 매장에서 먹기, 현금 결제",
      },
      {
        menu: "cheese-burger",
        options: { set: "set", side: "nugget", drink: "sprite", place: "eat-in" },
        payment: "card",
        text: "치즈버거 세트, 치킨너겟, 사이다, 매장에서 먹기, 카드 결제",
      },
    ],
    items: [
      { id: "bulgogi-burger", name: "불고기버거", price: 5200, emoji: "🍔", desc: "달콤한 불고기 소스" },
      { id: "shrimp-burger", name: "새우버거", price: 5600, emoji: "🍤", desc: "새우 패티 버거" },
      { id: "cheese-burger", name: "치즈버거", price: 4800, emoji: "🧀", desc: "치즈가 들어간 버거" },
      { id: "chicken-burger", name: "치킨버거", price: 5400, emoji: "🍗", desc: "닭고기 패티 버거" },
      { id: "double-burger", name: "더블버거", price: 6800, emoji: "🥪", desc: "패티가 두 장" },
      { id: "fish-burger", name: "피쉬버거", price: 5300, emoji: "🐟", desc: "생선 패티 버거" },
    ],
    optionGroups: [
      {
        id: "set",
        title: "구성 선택",
        items: [
          { id: "single", name: "단품", price: 0, desc: "버거만 주문합니다." },
          { id: "set", name: "세트", price: 2500, desc: "사이드와 음료가 포함됩니다." },
        ],
      },
      {
        id: "side",
        title: "사이드 선택",
        items: [
          { id: "fries", name: "감자튀김", price: 0, desc: "기본 사이드입니다." },
          { id: "nugget", name: "치킨너겟", price: 800, desc: "너겟으로 바꿉니다." },
        ],
      },
      {
        id: "drink",
        title: "음료 선택",
        items: [
          { id: "cola", name: "콜라", price: 0, desc: "기본 탄산음료입니다." },
          { id: "sprite", name: "사이다", price: 0, desc: "사이다로 바꿉니다." },
        ],
      },
      {
        id: "place",
        title: "이용 방법",
        items: [
          { id: "eat-in", name: "매장에서 먹기", price: 0, desc: "매장 안에서 먹습니다." },
          { id: "takeout", name: "포장하기", price: 0, desc: "가지고 갈 수 있게 받습니다." },
        ],
      },
    ],
  },
  chicken: {
    label: "치킨 가게 키오스크",
    menuTitle: "치킨 메뉴를 골라주세요",
    menuHint: "위의 주문 목표를 보고 같은 치킨 메뉴를 선택합니다.",
    menuGuide: "목표 치킨 이름을 메뉴판에서 찾아 눌러보세요.",
    optionGuide: "목표에 적힌 양, 소스, 추가 선택, 이용 방법을 차례대로 고르세요.",
    payGuide: "목표에 적힌 결제 방법을 고르세요.",
    missions: [
      {
        menu: "fried-chicken",
        options: { amount: "whole", sauce: "none", side: "radish", place: "takeout" },
        payment: "cash",
        text: "후라이드 치킨 한 마리, 소스 없음, 치킨무 추가, 포장하기, 현금 결제",
      },
      {
        menu: "spicy-chicken",
        options: { amount: "whole", sauce: "extra", side: "cola", place: "takeout" },
        payment: "card",
        text: "양념 치킨 한 마리, 양념 소스 추가, 콜라 추가, 포장하기, 카드 결제",
      },
      {
        menu: "boneless",
        options: { amount: "half", sauce: "none", side: "radish", place: "eat-in" },
        payment: "card",
        text: "순살 치킨 반 마리, 소스 없음, 치킨무 추가, 매장에서 먹기, 카드 결제",
      },
    ],
    items: [
      { id: "fried-chicken", name: "후라이드 치킨", price: 18000, emoji: "🍗", desc: "기본 튀김 치킨" },
      { id: "spicy-chicken", name: "양념 치킨", price: 19000, emoji: "🌶️", desc: "매콤달콤한 양념" },
      { id: "soy-chicken", name: "간장 치킨", price: 19000, emoji: "🥢", desc: "짭조름한 간장 소스" },
      { id: "half-chicken", name: "반반 치킨", price: 20000, emoji: "🍽️", desc: "후라이드와 양념" },
      { id: "boneless", name: "순살 치킨", price: 20000, emoji: "🍖", desc: "뼈 없는 치킨" },
      { id: "wings", name: "윙봉 치킨", price: 17000, emoji: "🍗", desc: "날개와 봉 부위" },
    ],
    optionGroups: [
      {
        id: "amount",
        title: "양 선택",
        items: [
          { id: "half", name: "반 마리", price: -7000, desc: "적은 양으로 주문합니다." },
          { id: "whole", name: "한 마리", price: 0, desc: "기본 한 마리입니다." },
        ],
      },
      {
        id: "sauce",
        title: "소스 선택",
        items: [
          { id: "none", name: "소스 없음", price: 0, desc: "추가 소스를 선택하지 않습니다." },
          { id: "extra", name: "양념 소스 추가", price: 1000, desc: "찍어 먹는 소스를 추가합니다." },
        ],
      },
      {
        id: "side",
        title: "추가 선택",
        items: [
          { id: "radish", name: "치킨무 추가", price: 500, desc: "치킨무를 하나 더 받습니다." },
          { id: "cola", name: "콜라 추가", price: 1500, desc: "콜라를 추가합니다." },
        ],
      },
      {
        id: "place",
        title: "이용 방법",
        items: [
          { id: "eat-in", name: "매장에서 먹기", price: 0, desc: "매장 안에서 먹습니다." },
          { id: "takeout", name: "포장하기", price: 0, desc: "가지고 갈 수 있게 받습니다." },
        ],
      },
    ],
  },
};

const payItems = [
  { id: "card", name: "카드 결제", desc: "카드를 꽂거나 대는 방식입니다." },
  { id: "cash", name: "현금 결제", desc: "직원에게 현금을 내는 방식입니다." },
  { id: "coupon", name: "쿠폰 사용", desc: "종이 쿠폰이나 모바일 쿠폰을 씁니다." },
  { id: "counter", name: "직원 도움 요청", desc: "결제가 어려울 때 도움을 요청합니다." },
];

const steps = ["menu", "option", "cart", "pay", "done"];
const state = {
  scenarioId: "cafe",
  orderMode: "single",
  missionIndex: 0,
  targetItemIndex: 0,
  cartItems: [],
  stepIndex: 0,
  selectedMenu: null,
  selectedOptions: {},
  selectedPay: null,
  startedAt: Date.now(),
  helpClicks: 0,
  backClicks: 0,
};

const els = {
  restaurantName: document.querySelector("#restaurantName"),
  missionText: document.querySelector("#missionText"),
  stepBadge: document.querySelector("#stepBadge"),
  screenTitle: document.querySelector("#screenTitle"),
  screenHint: document.querySelector("#screenHint"),
  menuView: document.querySelector("#menuView"),
  optionView: document.querySelector("#optionView"),
  cartView: document.querySelector("#cartView"),
  payView: document.querySelector("#payView"),
  doneView: document.querySelector("#doneView"),
  backBtn: document.querySelector("#backBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  helpBtn: document.querySelector("#helpBtn"),
  guideText: document.querySelector("#guideText"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  paybarCount: document.querySelector("#paybarCount"),
  paybarAmount: document.querySelector("#paybarAmount"),
  paybarBtn: document.querySelector("#paybarBtn"),
  restaurantSelect: document.querySelector("#restaurantSelect"),
  orderModeSelect: document.querySelector("#orderModeSelect"),
  groupSelect: document.querySelector("#groupSelect"),
  roundSelect: document.querySelector("#roundSelect"),
  completeCount: document.querySelector("#completeCount"),
  successRate: document.querySelector("#successRate"),
  avgTime: document.querySelector("#avgTime"),
  helpCount: document.querySelector("#helpCount"),
  downloadBtn: document.querySelector("#downloadBtn"),
  clearLogBtn: document.querySelector("#clearLogBtn"),
};

function scenario() {
  return scenarios[state.scenarioId];
}

function payName(paymentId) {
  return payItems.find((item) => item.id === paymentId)?.name || paymentId;
}

function stripPaymentText(text) {
  return text.replace(/,\s*(카드 결제|현금 결제|쿠폰 사용|직원 도움 요청)\s*$/, "");
}

function formatMissionLine(item) {
  return stripPaymentText(item.text).replace(/,\s*/g, " · ");
}

function placeLabel(placeId) {
  return findOption("place", placeId)?.name || placeId;
}

function withUnifiedPlace(item, placeId) {
  return {
    ...item,
    options: { ...item.options, place: placeId },
    text: item.text.replace(/매장에서 마시기|매장에서 먹기|포장하기/g, placeLabel(placeId)),
  };
}

function missionChoices() {
  if (state.orderMode === "single") {
    return scenario().missions.map((item) => ({
      items: [item],
      payment: item.payment,
      text: item.text,
    }));
  }

  return scenario().missions.map((item, index, items) => {
    const nextItem = items[(index + 1) % items.length];
    const sharedPlace = item.options.place;
    const firstItem = withUnifiedPlace(item, sharedPlace);
    const secondItem = withUnifiedPlace(nextItem, sharedPlace);
    return {
      items: [firstItem, secondItem],
      payment: secondItem.payment,
      text: `1번 상품: ${stripPaymentText(firstItem.text)} / 2번 상품: ${stripPaymentText(secondItem.text)} / 마지막 결제: ${payName(secondItem.payment)}`,
    };
  });
}

function mission() {
  return missionChoices()[state.missionIndex];
}

function renderMissionText() {
  const activeMission = mission();
  if (activeMission.items.length === 1) {
    els.missionText.innerHTML = `
      <div class="mission-row">
        <b>주문할 상품</b>
        <strong>${formatMissionLine(activeMission.items[0])}</strong>
      </div>
      <div class="mission-row payment">
        <b>결제 방법</b>
        <strong>${payName(activeMission.payment)}</strong>
      </div>
    `;
    return;
  }

  els.missionText.innerHTML = activeMission.items
    .map((item, index) => `
      <div class="mission-row">
        <b>${index + 1}번 상품</b>
        <strong>${formatMissionLine(item)}</strong>
      </div>
    `)
    .join("") + `
      <div class="mission-row payment">
        <b>마지막 결제</b>
        <strong>${payName(activeMission.payment)}</strong>
      </div>
    `;
}

function targetItem() {
  return mission().items[state.targetItemIndex];
}

function chooseRandomMission() {
  const choices = missionChoices();
  if (choices.length === 1) {
    state.missionIndex = 0;
    return;
  }
  let nextIndex = Math.floor(Math.random() * choices.length);
  if (nextIndex === state.missionIndex) nextIndex = (nextIndex + 1) % choices.length;
  state.missionIndex = nextIndex;
}

function getLogs() {
  return JSON.parse(localStorage.getItem("kiosk-practice-logs") || "[]");
}

function setLogs(logs) {
  localStorage.setItem("kiosk-practice-logs", JSON.stringify(logs));
}

function money(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function currentStep() {
  return steps[state.stepIndex];
}

function goNext() {
  if (!canGoNext()) return;
  if (currentStep() === "option") {
    addCurrentItemToCart();
    if (state.targetItemIndex < mission().items.length - 1) {
      state.targetItemIndex += 1;
      state.selectedMenu = null;
      state.selectedOptions = {};
      state.stepIndex = 0;
      render();
      return;
    }
  }
  if (currentStep() === "pay") saveResult();
  state.stepIndex = Math.min(steps.length - 1, state.stepIndex + 1);
  render();
}

function findMenu(id) {
  return scenario().items.find((item) => item.id === id);
}

function findOption(groupId, itemId) {
  return scenario().optionGroups.find((group) => group.id === groupId).items.find((item) => item.id === itemId);
}

function selectedOptionList() {
  return scenario().optionGroups
    .filter((group) => state.selectedOptions[group.id])
    .map((group) => ({ group, item: findOption(group.id, state.selectedOptions[group.id]) }));
}

function currentItemTotal() {
  const menu = findMenu(state.selectedMenu);
  const optionTotal = selectedOptionList().reduce((sum, { item }) => sum + item.price, 0);
  return (menu?.price || 0) + optionTotal;
}

function totalPrice() {
  return state.cartItems.reduce((sum, item) => sum + item.total, 0) + currentItemTotal();
}

function addCurrentItemToCart() {
  const menu = findMenu(state.selectedMenu);
  const options = selectedOptionList();
  const optionNames = Object.fromEntries(options.map(({ group, item }) => [group.title, item.name]));
  const optionIds = Object.fromEntries(options.map(({ group, item }) => [group.id, item.id]));
  state.cartItems.push({
    menuId: state.selectedMenu,
    menuName: menu.name,
    optionIds,
    optionNames,
    total: currentItemTotal(),
  });
}

function isMissionSuccess() {
  const target = mission();
  const itemsMatch =
    state.cartItems.length === target.items.length &&
    target.items.every((item, index) => {
      const cartItem = state.cartItems[index];
      return (
        cartItem &&
        cartItem.menuId === item.menu &&
        scenario().optionGroups.every((group) => cartItem.optionIds[group.id] === item.options[group.id])
      );
    });
  return (
    itemsMatch &&
    state.selectedPay === target.payment
  );
}

function showOnly(viewName) {
  [els.menuView, els.optionView, els.cartView, els.payView, els.doneView].forEach((view) => {
    view.classList.add("hidden");
  });
  els[`${viewName}View`].classList.remove("hidden");
}

function renderMenu() {
  els.menuView.innerHTML = scenario().items
    .map((item) => `
      <button class="menu-card ${state.selectedMenu === item.id ? "selected" : ""}" data-menu="${item.id}" type="button">
        <span class="menu-photo" aria-hidden="true"><span>${item.emoji}</span></span>
        <span class="menu-info">
          <strong>${item.name}</strong>
          <span>${money(item.price)} · ${item.desc}</span>
        </span>
      </button>
    `)
    .join("");
}

function renderOptions() {
  els.optionView.innerHTML = scenario().optionGroups
    .map((group) => `
      <section class="option-group">
        <h3>${group.title}</h3>
        <div class="option-pair">
          ${group.items
            .map((item) => `
              <button class="option-card ${state.selectedOptions[group.id] === item.id ? "selected" : ""}" data-group="${group.id}" data-option="${item.id}" type="button">
                <strong>${item.name}</strong>
                <span>${item.desc}${item.price ? ` (${item.price > 0 ? "+" : ""}${money(item.price)})` : ""}</span>
              </button>
            `)
            .join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderCart() {
  const rows = state.cartItems
    .map((cartItem, index) => `
      <div class="cart-row">
        <strong>${index + 1}. ${cartItem.menuName}<small>${Object.entries(cartItem.optionNames).map(([key, value]) => `${key}: ${value}`).join(" / ")}</small></strong>
        <span>${money(cartItem.total)}</span>
      </div>
    `)
    .join("");
  els.cartView.innerHTML = `
    ${rows}
    <div class="total"><span>결제할 금액</span><span>${money(totalPrice())}</span></div>
  `;
}

function renderPay() {
  els.payView.innerHTML = payItems
    .map((item) => `
      <button class="pay-card ${state.selectedPay === item.id ? "selected" : ""}" data-pay="${item.id}" type="button">
        <strong>${item.name}</strong>
        <span>${item.desc}</span>
      </button>
    `)
    .join("");
}

function renderDone() {
  const seconds = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
  const success = isMissionSuccess();
  els.doneView.innerHTML = `
    <article class="done-card ${success ? "success" : "retry"}">
      <h2>${success ? "목표 주문 성공" : "목표와 다른 주문"}</h2>
      <p>${seconds}초 동안 연습했습니다. 식당 유형, 목표 주문, 정답 여부, 걸린 시간이 기록됩니다.</p>
    </article>
  `;
}

function updateCopy() {
  const step = currentStep();
  const active = scenario();
  const copies = {
    menu: [active.menuTitle, `${state.targetItemIndex + 1}번 상품을 고릅니다. ${active.menuHint}`, active.menuGuide],
    option: ["옵션을 골라주세요", `${state.targetItemIndex + 1}번 상품의 세부 선택을 고릅니다.`, active.optionGuide],
    cart: ["주문 내용을 확인해주세요", "목표 주문과 내가 고른 내용이 같은지 확인합니다.", "다르면 이전을 눌러 고칠 수 있습니다."],
    pay: ["결제 방법을 골라주세요", "목표에 적힌 결제 방법을 선택합니다.", active.payGuide],
    done: ["연습이 끝났습니다", "정답 여부와 연습 기록이 저장되었습니다.", "식당 유형별 정답률과 평균 시간을 비교해볼 수 있습니다."],
  };
  const [title, hint, guide] = copies[step];
  const itemBadge = mission().items.length > 1 && step !== "cart" && step !== "pay" && step !== "done"
    ? ` · ${state.targetItemIndex + 1}/${mission().items.length}상품`
    : "";
  els.stepBadge.textContent = `${state.stepIndex + 1}단계${itemBadge}`;
  els.screenTitle.textContent = title;
  els.screenHint.textContent = hint;
  els.guideText.textContent = guide;

  const progress = Math.round((state.stepIndex / (steps.length - 1)) * 100);
  els.progressText.textContent = `진행률 ${progress}%`;
  els.progressBar.style.width = `${progress}%`;
}

function canGoNext() {
  const step = currentStep();
  if (step === "menu") return Boolean(state.selectedMenu);
  if (step === "option") return scenario().optionGroups.every((group) => Boolean(state.selectedOptions[group.id]));
  if (step === "pay") return Boolean(state.selectedPay);
  return step !== "done";
}

function renderStats() {
  const logs = getLogs();
  const completed = logs.length;
  const avg = completed ? Math.round(logs.reduce((sum, log) => sum + log.seconds, 0) / completed) : 0;
  const successCount = logs.filter((log) => log.missionSuccess === "성공").length;
  els.completeCount.textContent = completed;
  els.successRate.textContent = completed ? `${Math.round((successCount / completed) * 100)}%` : "0%";
  els.avgTime.textContent = `${avg}초`;
  els.helpCount.textContent = logs.reduce((sum, log) => sum + log.helpClicks, 0);
}

function saveResult() {
  const pay = payItems.find((item) => item.id === state.selectedPay);
  const logs = getLogs();
  logs.push({
    date: new Date().toLocaleString("ko-KR"),
    restaurant: scenario().label,
    orderMode: state.orderMode === "multi" ? "여러 개 주문" : "1개 주문",
    group: els.groupSelect.value,
    round: els.roundSelect.value,
    mission: mission().text,
    missionSuccess: isMissionSuccess() ? "성공" : "실패",
    menu: state.cartItems.map((item) => item.menuName).join(" + "),
    options: state.cartItems
      .map((item, index) => `${index + 1}번: ${Object.entries(item.optionNames).map(([key, value]) => `${key}: ${value}`).join(" / ")}`)
      .join(" || "),
    payment: pay.name,
    total: totalPrice(),
    seconds: Math.max(1, Math.round((Date.now() - state.startedAt) / 1000)),
    helpClicks: state.helpClicks,
    backClicks: state.backClicks,
  });
  setLogs(logs);
  renderStats();
}

function resetPractice({ randomizeMission = true } = {}) {
  state.stepIndex = 0;
  state.targetItemIndex = 0;
  state.cartItems = [];
  state.selectedMenu = null;
  state.selectedOptions = {};
  state.selectedPay = null;
  state.startedAt = Date.now();
  state.helpClicks = 0;
  state.backClicks = 0;
  if (randomizeMission) chooseRandomMission();
  render();
}

function render() {
  const step = currentStep();
  showOnly(step);
  if (step === "menu") renderMenu();
  if (step === "option") renderOptions();
  if (step === "cart") renderCart();
  if (step === "pay") renderPay();
  if (step === "done") renderDone();
  updateCopy();
  els.restaurantName.textContent = scenario().label;
  renderMissionText();
  els.paybarCount.textContent = state.cartItems.length + (state.selectedMenu ? 1 : 0);
  els.paybarAmount.textContent = money(totalPrice());
  els.paybarBtn.disabled = currentStep() !== "cart";
  els.backBtn.disabled = state.stepIndex === 0 || step === "done";
  els.nextBtn.disabled = !canGoNext();
  els.nextBtn.textContent = step === "pay" ? "주문 완료" : "다음";
  if (step === "done") els.nextBtn.textContent = "완료됨";
}

function downloadCsv() {
  const logs = getLogs();
  if (!logs.length) return;
  const headers = [
    "date",
    "restaurant",
    "orderMode",
    "group",
    "round",
    "mission",
    "missionSuccess",
    "menu",
    "options",
    "payment",
    "total",
    "seconds",
    "helpClicks",
    "backClicks",
  ];
  const rows = [headers.join(",")].concat(
    logs.map((log) => headers.map((key) => `"${String(log[key]).replaceAll('"', '""')}"`).join(","))
  );
  const blob = new Blob([`\uFEFF${rows.join("\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "kiosk_practice_results.csv";
  link.click();
  URL.revokeObjectURL(url);
}

els.restaurantSelect.addEventListener("change", () => {
  state.scenarioId = els.restaurantSelect.value;
  state.missionIndex = -1;
  resetPractice();
});

els.orderModeSelect.addEventListener("change", () => {
  state.orderMode = els.orderModeSelect.value;
  state.missionIndex = -1;
  resetPractice();
});

els.menuView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-menu]");
  if (!button) return;
  state.selectedMenu = button.dataset.menu;
  goNext();
});

els.optionView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button) return;
  state.selectedOptions[button.dataset.group] = button.dataset.option;
  if (canGoNext()) {
    goNext();
    return;
  }
  render();
});

els.payView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pay]");
  if (!button) return;
  state.selectedPay = button.dataset.pay;
  goNext();
});

els.nextBtn.addEventListener("click", () => {
  goNext();
});

els.paybarBtn.addEventListener("click", () => {
  if (currentStep() !== "cart") return;
  goNext();
});

els.backBtn.addEventListener("click", () => {
  if (state.stepIndex === 0) return;
  state.backClicks += 1;
  state.stepIndex -= 1;
  render();
});

els.resetBtn.addEventListener("click", () => resetPractice());

els.helpBtn.addEventListener("click", () => {
  state.helpClicks += 1;
  const active = scenario();
  const helpByStep = {
    menu: active.menuGuide,
    option: active.optionGuide,
    cart: "주문 목표와 장바구니의 글자가 같은지 천천히 비교하세요.",
    pay: active.payGuide,
    done: "처음부터 버튼을 누르면 새 목표 주문으로 다시 연습할 수 있습니다.",
  };
  els.guideText.textContent = helpByStep[currentStep()];
});

els.downloadBtn.addEventListener("click", downloadCsv);

els.clearLogBtn.addEventListener("click", () => {
  if (!confirm("저장된 연습 기록을 모두 지울까요?")) return;
  setLogs([]);
  renderStats();
});

chooseRandomMission();
renderStats();
render();
