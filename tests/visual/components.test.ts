import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/test");
  // 폰트·이미지 로드 완료 대기
  await page.waitForLoadState("networkidle");
});

// ────────────────────────────────────────────────────────────
// 전체 페이지
// ────────────────────────────────────────────────────────────

test("전체 컴포넌트 페이지 스냅샷", async ({ page }) => {
  await expect(page).toHaveScreenshot("full-page.png", {
    fullPage: true,
    animations: "disabled",
  });
});

// ────────────────────────────────────────────────────────────
// Button
// ────────────────────────────────────────────────────────────

test.describe("Button", () => {
  test("모든 variant 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-button");
    await expect(section).toHaveScreenshot("button-variants.png", {
      animations: "disabled",
    });
  });

  test("primary — hover 상태", async ({ page }) => {
    const btn = page
      .getByTestId("section-button")
      .getByRole("button", { name: "Primary" })
      .first();
    await btn.hover();
    await expect(btn).toHaveScreenshot("button-primary-hover.png");
  });

  test("fab — hover 상태", async ({ page }) => {
    const btn = page
      .getByTestId("section-button")
      .getByRole("button", { name: /생각 나누기/ });
    await btn.hover();
    await expect(btn).toHaveScreenshot("button-fab-hover.png");
  });

  test("disabled 상태", async ({ page }) => {
    const section = page.getByTestId("section-button");
    const disabled = section.locator("button:disabled").first();
    await expect(disabled).toHaveScreenshot("button-disabled.png");
  });
});

// ────────────────────────────────────────────────────────────
// Card
// ────────────────────────────────────────────────────────────

test.describe("Card", () => {
  test("모든 variant 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-card");
    await expect(section).toHaveScreenshot("card-variants.png", {
      animations: "disabled",
    });
  });

  test("interactive — hover 상태", async ({ page }) => {
    // 두 번째 카드가 interactive variant
    const card = page.getByTestId("section-card").locator("[class*='Card']").nth(1);
    await card.hover();
    await expect(card).toHaveScreenshot("card-interactive-hover.png");
  });
});

// ────────────────────────────────────────────────────────────
// Input / Textarea
// ────────────────────────────────────────────────────────────

test.describe("Input", () => {
  test("기본 · 에러 · 비활성화 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-input");
    await expect(section).toHaveScreenshot("input-states.png", {
      animations: "disabled",
    });
  });

  test("포커스 상태", async ({ page }) => {
    const input = page
      .getByTestId("section-input")
      .getByPlaceholder("오늘 어떤 생각을 하셨나요?");
    await input.focus();
    await expect(input).toHaveScreenshot("input-focused.png");
  });

  test("textarea 포커스 상태", async ({ page }) => {
    const textarea = page
      .getByTestId("section-input")
      .getByPlaceholder("오늘 어떤 생각을 하셨나요? 솔직하게 적어보세요.");
    await textarea.focus();
    await expect(textarea).toHaveScreenshot("textarea-focused.png");
  });
});

// ────────────────────────────────────────────────────────────
// Avatar
// ────────────────────────────────────────────────────────────

test.describe("Avatar", () => {
  test("모든 size 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-avatar");
    await expect(section).toHaveScreenshot("avatar-sizes.png", {
      animations: "disabled",
    });
  });
});

// ────────────────────────────────────────────────────────────
// Badge
// ────────────────────────────────────────────────────────────

test.describe("Badge", () => {
  test("모든 variant 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-badge");
    await expect(section).toHaveScreenshot("badge-variants.png", {
      animations: "disabled",
    });
  });
});

// ────────────────────────────────────────────────────────────
// Spinner
// ────────────────────────────────────────────────────────────

test.describe("Spinner", () => {
  test("모든 size 스냅샷", async ({ page }) => {
    const section = page.getByTestId("section-spinner");
    await expect(section).toHaveScreenshot("spinner-sizes.png", {
      animations: "disabled",
    });
  });
});
