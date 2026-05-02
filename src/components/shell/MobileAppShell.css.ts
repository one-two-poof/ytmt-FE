import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

/**
 * `transform` 으로 containing block을 만들어 `position: fixed` 헤더·탭이
 * 뷰포트 전체가 아니라 이 셸 너비 안에만 고정되도록 합니다.
 */
export const shell = style({
  width: `min(100%, ${vars.layout.mobileMaxWidth})`,
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  backgroundColor: vars.color.background,
  color: vars.color.onBackground,
  position: "relative",
  transform: "translateZ(0)",
  overflowX: "hidden",
  WebkitOverflowScrolling: "touch",
  "@media": {
    "(min-width: 431px)": {
      boxShadow:
        "0 0 0 1px rgba(0, 0, 0, 0.06), 0 24px 64px rgba(0, 0, 0, 0.14)",
    },
  },
});

/** 라우트 트리가 세로로 프레임을 채우도록 (100% 높이 체인) */
export const shellInner = style({
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: 0,
});
