import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.color.background,
  color: vars.color.onBackground,
  fontFamily: vars.font.sans,
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

export const glassCard = style({
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 30px 50px -20px rgba(67,67,213,0.06)",
});

export const label = style({
  display: "block",
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: vars.color.primary,
  marginBottom: "8px",
});

export const input = style({
  width: "100%",
  backgroundColor: vars.color.surfaceContainerLow,
  border: "none",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: vars.fontSize.bodyMd,
});

export const dangerBtn = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "16px",
  color: vars.color.error,
  fontSize: vars.fontSize.bodyMd,
  borderRadius: "16px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  transition: "background 0.2s",
  selectors: {
    "&:hover": { backgroundColor: "rgba(255,218,214,0.15)" },
    "&:active": { transform: "scale(0.98)" },
  },
});
