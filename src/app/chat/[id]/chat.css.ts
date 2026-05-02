import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.color.surface,
  color: vars.color.onSurface,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
});

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 8px 32px rgba(93,95,239,0.08)",
  borderBottom: "1px solid rgba(238,242,255,0.5)",
});

export const main = style({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  paddingTop: "80px",
  paddingBottom: "120px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackMd,
});

export const dateChip = style({
  alignSelf: "center",
  padding: "6px 16px",
  borderRadius: vars.radii.full,
  backgroundColor: vars.color.surfaceContainerLow,
  color: vars.color.onSurfaceVariant,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

export const bubbleIn = style({
  alignSelf: "flex-start",
  maxWidth: "85%",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackSm,
});

export const bubbleInInner = style({
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "24px",
  borderTopLeftRadius: "24px",
  borderTopRightRadius: "24px",
  borderBottomLeftRadius: "4px",
  padding: "16px",
  color: vars.color.onSurfaceVariant,
  lineHeight: vars.lineHeight.relaxed,
  boxShadow: "0 4px 20px rgba(93,95,239,0.06)",
});

export const bubbleOut = style({
  alignSelf: "flex-end",
  maxWidth: "85%",
  backgroundColor: vars.color.primaryContainer,
  color: vars.color.onPrimaryContainer,
  borderRadius: "24px",
  borderTopRightRadius: "4px",
  padding: "16px",
  lineHeight: vars.lineHeight.relaxed,
  boxShadow: "0 8px 24px rgba(93,95,239,0.2)",
});

export const reflectionCard = style({
  marginTop: "32px",
  position: "relative",
  overflow: "hidden",
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(16px)",
  border: "1px dashed rgba(199,210,254,0.9)",
  borderRadius: "32px",
  padding: "24px",
});

export const footer = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(16px)",
  borderTop: "1px solid rgba(255,255,255,0.4)",
  paddingBottom: `max(12px, env(safe-area-inset-bottom, 0px))`,
});

export const footerInner = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px 20px",
});

export const inputArea = style({
  flex: 1,
  position: "relative",
});

export const textarea = style({
  width: "100%",
  backgroundColor: vars.color.surfaceContainerLowest,
  border: "none",
  borderRadius: "24px",
  padding: "14px 52px 14px 20px",
  fontSize: vars.fontSize.bodyMd,
  resize: "none",
  outline: "none",
  selectors: {
    "&:focus": {
      boxShadow: `0 0 0 2px rgba(67, 67, 213, 0.15)`,
    },
    "&::placeholder": {
      color: vars.color.outline,
    },
  },
});

export const sendBtn = style({
  position: "absolute",
  right: "8px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  borderRadius: vars.radii.full,
  border: "none",
  backgroundColor: vars.color.primaryContainer,
  color: vars.color.onPrimary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 16px rgba(93,95,239,0.3)",
  selectors: {
    "&:active": { transform: "translateY(-50%) scale(0.92)" },
  },
});
