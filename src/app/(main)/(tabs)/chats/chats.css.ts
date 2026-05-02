import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  backgroundColor: vars.color.surface,
  fontFamily: vars.font.sans,
});

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 40,
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `0 ${vars.space.marginMobile}`,
  backgroundColor: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid rgba(255,255,255,0.4)",
});

export const title = style({
  fontSize: "18px",
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
});

export const main = style({
  paddingTop: "80px",
  paddingBottom: "120px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  maxWidth: "448px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackSm,
});

export const row = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.gutter,
  padding: vars.space.stackMd,
  borderRadius: "20px",
  backgroundColor: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.4)",
  boxShadow: vars.shadow.card,
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.15s",
  selectors: {
    "&:active": { transform: "scale(0.98)" },
  },
});

export const preview = style({
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurfaceVariant,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
});
