# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: components.test.ts >> Button >> fab — hover 상태
- Location: tests/visual/components.test.ts:41:7

# Error details

```
Error: A snapshot doesn't exist at /Users/sanginjeong/Desktop/side-project/ytmt/tests/visual/__snapshots__/components.test.ts-snapshots/button-fab-hover-desktop-darwin.png, writing actual.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - heading "UI Component Showcase" [level=1] [ref=e4]
      - paragraph [ref=e5]: 너도나도 디자인 시스템 — 시각적 회귀 테스트용 페이지
    - generic [ref=e6]:
      - heading "Button" [level=2] [ref=e7]
      - generic [ref=e8]:
        - paragraph [ref=e9]: Variant
        - generic [ref=e10]:
          - button "Primary" [ref=e11] [cursor=pointer]
          - button "Ghost" [ref=e12] [cursor=pointer]
          - button "+ 생각 나누기" [ref=e13] [cursor=pointer]
      - generic [ref=e14]:
        - paragraph [ref=e15]: Size
        - generic [ref=e16]:
          - button "Small" [ref=e17] [cursor=pointer]
          - button "Medium" [ref=e18] [cursor=pointer]
          - button "Large" [ref=e19] [cursor=pointer]
      - generic [ref=e20]:
        - paragraph [ref=e21]: Disabled
        - generic [ref=e22]:
          - button "Primary Disabled" [disabled] [ref=e23]
          - button "Ghost Disabled" [disabled] [ref=e24]
          - button "FAB Disabled" [disabled] [ref=e25]
      - generic [ref=e26]:
        - paragraph [ref=e27]: Full Width
        - button "Full Width Button" [ref=e28] [cursor=pointer]
    - generic [ref=e30]:
      - heading "Card" [level=2] [ref=e31]
      - generic [ref=e32]:
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]: 김
            - generic [ref=e37]: 김민준
            - generic [ref=e38]: 92% 매칭
          - paragraph [ref=e39]: 요즘 새벽에 혼자 걷는 게 좋아졌어요. 아무 생각 없이 걷다 보면 오히려 많은 것들이 정리되는 느낌이에요.
        - generic [ref=e41] [cursor=pointer]:
          - generic [ref=e42]:
            - img "박서연" [ref=e44]
            - generic [ref=e45]: 박서연
            - generic [ref=e46]: 87% 매칭
          - paragraph [ref=e47]: 사람들이 왜 나를 오해하는지 모르겠어요. 그냥 솔직하게 말하는 건데.
          - button "채팅 보내기" [ref=e49]
        - generic [ref=e51]:
          - paragraph [ref=e52]: Flat variant
          - paragraph [ref=e53]: glassmorphism 없이 단순한 흰 배경 카드입니다.
    - generic [ref=e55]:
      - heading "Input / Textarea" [level=2] [ref=e56]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]: 기본 입력
          - textbox "오늘 어떤 생각을 하셨나요?" [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]: 에러 상태
          - textbox "입력해주세요" [ref=e63]: 이미 3개 등록됨
          - generic [ref=e64]: 하루 최대 3개까지 등록할 수 있어요.
        - generic [ref=e65]:
          - generic [ref=e66]: 비활성화
          - textbox "비활성화된 입력" [disabled] [ref=e67]
      - generic [ref=e69]:
        - generic [ref=e70]: 오늘의 생각
        - textbox "오늘 어떤 생각을 하셨나요? 솔직하게 적어보세요." [ref=e71]
      - generic [ref=e73]:
        - generic [ref=e74]: 에러 상태 (Textarea)
        - textbox "내용을 입력해주세요" [ref=e75]: 짧은 글
        - generic [ref=e76]: 최소 10자 이상 입력해주세요.
    - generic [ref=e78]:
      - heading "Avatar" [level=2] [ref=e79]
      - generic [ref=e80]:
        - paragraph [ref=e81]: Size (이니셜)
        - generic [ref=e82]:
          - generic [ref=e83]: 김
          - generic [ref=e84]: 김
          - generic [ref=e85]: 김
          - generic [ref=e86]: 김
      - generic [ref=e87]:
        - paragraph [ref=e88]: Size (이미지)
        - generic [ref=e89]:
          - img "박서연" [ref=e91]
          - img "박서연" [ref=e93]
          - img "박서연" [ref=e95]
          - img "박서연" [ref=e97]
    - generic [ref=e99]:
      - heading "Badge" [level=2] [ref=e100]
      - generic [ref=e101]:
        - generic [ref=e102]: Primary
        - generic [ref=e103]: Spark Gold
        - generic [ref=e104]: Surface
        - generic [ref=e105]: Outline
      - generic [ref=e106]:
        - generic [ref=e107]: 온라인
        - generic [ref=e109]: 92% 매칭
        - generic [ref=e111]: 3개 등록
        - generic [ref=e113]: 오늘 가입
    - generic [ref=e116]:
      - heading "Spinner" [level=2] [ref=e117]
      - generic [ref=e118]:
        - paragraph [ref=e119]: Size
        - generic [ref=e120]:
          - status "로딩 중" [ref=e122]
          - status "로딩 중" [ref=e124]
          - status "로딩 중" [ref=e126]
  - generic [ref=e131] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e132]:
      - img [ref=e133]
    - generic [ref=e136]:
      - button "Open issues overlay" [ref=e137]:
        - generic [ref=e138]:
          - generic [ref=e139]: "0"
          - generic [ref=e140]: "1"
        - generic [ref=e141]: Issue
      - button "Collapse issues badge" [ref=e142]:
        - img [ref=e143]
  - alert [ref=e145]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.beforeEach(async ({ page }) => {
  4   |   await page.goto("/test");
  5   |   // 폰트·이미지 로드 완료 대기
  6   |   await page.waitForLoadState("networkidle");
  7   | });
  8   | 
  9   | // ────────────────────────────────────────────────────────────
  10  | // 전체 페이지
  11  | // ────────────────────────────────────────────────────────────
  12  | 
  13  | test("전체 컴포넌트 페이지 스냅샷", async ({ page }) => {
  14  |   await expect(page).toHaveScreenshot("full-page.png", {
  15  |     fullPage: true,
  16  |     animations: "disabled",
  17  |   });
  18  | });
  19  | 
  20  | // ────────────────────────────────────────────────────────────
  21  | // Button
  22  | // ────────────────────────────────────────────────────────────
  23  | 
  24  | test.describe("Button", () => {
  25  |   test("모든 variant 스냅샷", async ({ page }) => {
  26  |     const section = page.getByTestId("section-button");
  27  |     await expect(section).toHaveScreenshot("button-variants.png", {
  28  |       animations: "disabled",
  29  |     });
  30  |   });
  31  | 
  32  |   test("primary — hover 상태", async ({ page }) => {
  33  |     const btn = page
  34  |       .getByTestId("section-button")
  35  |       .getByRole("button", { name: "Primary" })
  36  |       .first();
  37  |     await btn.hover();
  38  |     await expect(btn).toHaveScreenshot("button-primary-hover.png");
  39  |   });
  40  | 
  41  |   test("fab — hover 상태", async ({ page }) => {
  42  |     const btn = page
  43  |       .getByTestId("section-button")
  44  |       .getByRole("button", { name: /생각 나누기/ });
  45  |     await btn.hover();
> 46  |     await expect(btn).toHaveScreenshot("button-fab-hover.png");
      |     ^ Error: A snapshot doesn't exist at /Users/sanginjeong/Desktop/side-project/ytmt/tests/visual/__snapshots__/components.test.ts-snapshots/button-fab-hover-desktop-darwin.png, writing actual.
  47  |   });
  48  | 
  49  |   test("disabled 상태", async ({ page }) => {
  50  |     const section = page.getByTestId("section-button");
  51  |     const disabled = section.locator("button:disabled").first();
  52  |     await expect(disabled).toHaveScreenshot("button-disabled.png");
  53  |   });
  54  | });
  55  | 
  56  | // ────────────────────────────────────────────────────────────
  57  | // Card
  58  | // ────────────────────────────────────────────────────────────
  59  | 
  60  | test.describe("Card", () => {
  61  |   test("모든 variant 스냅샷", async ({ page }) => {
  62  |     const section = page.getByTestId("section-card");
  63  |     await expect(section).toHaveScreenshot("card-variants.png", {
  64  |       animations: "disabled",
  65  |     });
  66  |   });
  67  | 
  68  |   test("interactive — hover 상태", async ({ page }) => {
  69  |     // 두 번째 카드가 interactive variant
  70  |     const card = page.getByTestId("section-card").locator("[class*='Card']").nth(1);
  71  |     await card.hover();
  72  |     await expect(card).toHaveScreenshot("card-interactive-hover.png");
  73  |   });
  74  | });
  75  | 
  76  | // ────────────────────────────────────────────────────────────
  77  | // Input / Textarea
  78  | // ────────────────────────────────────────────────────────────
  79  | 
  80  | test.describe("Input", () => {
  81  |   test("기본 · 에러 · 비활성화 스냅샷", async ({ page }) => {
  82  |     const section = page.getByTestId("section-input");
  83  |     await expect(section).toHaveScreenshot("input-states.png", {
  84  |       animations: "disabled",
  85  |     });
  86  |   });
  87  | 
  88  |   test("포커스 상태", async ({ page }) => {
  89  |     const input = page
  90  |       .getByTestId("section-input")
  91  |       .getByPlaceholder("오늘 어떤 생각을 하셨나요?");
  92  |     await input.focus();
  93  |     await expect(input).toHaveScreenshot("input-focused.png");
  94  |   });
  95  | 
  96  |   test("textarea 포커스 상태", async ({ page }) => {
  97  |     const textarea = page
  98  |       .getByTestId("section-input")
  99  |       .getByPlaceholder("오늘 어떤 생각을 하셨나요? 솔직하게 적어보세요.");
  100 |     await textarea.focus();
  101 |     await expect(textarea).toHaveScreenshot("textarea-focused.png");
  102 |   });
  103 | });
  104 | 
  105 | // ────────────────────────────────────────────────────────────
  106 | // Avatar
  107 | // ────────────────────────────────────────────────────────────
  108 | 
  109 | test.describe("Avatar", () => {
  110 |   test("모든 size 스냅샷", async ({ page }) => {
  111 |     const section = page.getByTestId("section-avatar");
  112 |     await expect(section).toHaveScreenshot("avatar-sizes.png", {
  113 |       animations: "disabled",
  114 |     });
  115 |   });
  116 | });
  117 | 
  118 | // ────────────────────────────────────────────────────────────
  119 | // Badge
  120 | // ────────────────────────────────────────────────────────────
  121 | 
  122 | test.describe("Badge", () => {
  123 |   test("모든 variant 스냅샷", async ({ page }) => {
  124 |     const section = page.getByTestId("section-badge");
  125 |     await expect(section).toHaveScreenshot("badge-variants.png", {
  126 |       animations: "disabled",
  127 |     });
  128 |   });
  129 | });
  130 | 
  131 | // ────────────────────────────────────────────────────────────
  132 | // Spinner
  133 | // ────────────────────────────────────────────────────────────
  134 | 
  135 | test.describe("Spinner", () => {
  136 |   test("모든 size 스냅샷", async ({ page }) => {
  137 |     const section = page.getByTestId("section-spinner");
  138 |     await expect(section).toHaveScreenshot("spinner-sizes.png", {
  139 |       animations: "disabled",
  140 |     });
  141 |   });
  142 | });
  143 | 
```