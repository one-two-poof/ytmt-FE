import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurface,
  background: "radial-gradient(circle at top left, #fdfdff, #f7f9fc)",
});

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(24px)",
  borderBottom: "1px solid rgba(255,255,255,0.4)",
  boxShadow: "0 20px 40px -15px rgba(93,95,239,0.08)",
});

export const headerInner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  paddingLeft: "20px",
  paddingRight: "20px",
  width: "100%",
});

export const main = style({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  paddingTop: "96px",
  paddingBottom: "48px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackLg,
});
