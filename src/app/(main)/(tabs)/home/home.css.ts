import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurface,
  background: "radial-gradient(circle at top left, #f7f9fc 0%, #eceef1 100%)",
  overflowX: "hidden",
});

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  height: "64px",
  backgroundColor: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  borderBottom: "1px solid rgba(255,255,255,0.4)",
  boxShadow: "0 4px 30px rgba(93,95,239,0.05)",
});

export const headerBtn = style({
  color: vars.color.primary,
  padding: "8px",
  borderRadius: vars.radii.full,
  transition: "transform 0.2s",
  selectors: {
    "&:active": { transform: "scale(0.95)" },
  },
});

export const headerTitle = style({
  fontFamily: vars.font.sans,
  fontSize: "18px",
  fontWeight: "800",
  letterSpacing: vars.letterSpacing.snug,
  color: vars.color.primary,
});

export const main = style({
  paddingTop: "96px",
  paddingBottom: "128px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  maxWidth: "512px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackLg,
});

export const statusBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.4)",
  padding: `${12}px ${vars.space.gutter}`,
  borderRadius: vars.radii.full,
  border: "1px solid rgba(255,255,255,0.6)",
});

export const cardTitle = style({
  fontSize: vars.fontSize.h2,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.snug,
  color: vars.color.onSurface,
});

export const cardDesc = style({
  marginTop: vars.space.stackSm,
  fontSize: vars.fontSize.bodyMd,
  color: "rgba(70, 69, 85, 0.7)",
  lineHeight: vars.lineHeight.relaxed,
});

export const textareaWrap = style({
  marginTop: vars.space.stackLg,
  position: "relative",
});

export const charCount = style({
  position: "absolute",
  bottom: "16px",
  right: "16px",
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  color: "rgba(70, 69, 85, 0.4)",
});

export const fabRow = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "-24px",
  zIndex: 10,
});

export const quoteSection = style({
  marginTop: vars.space.stackLg,
});

export const quoteHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: vars.space.stackSm,
  paddingLeft: "8px",
});

export const quoteImgWrap = style({
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  aspectRatio: "16 / 9",
});

export const quoteImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.7s ease",
  selectors: {
    [`${quoteImgWrap}:hover &`]: {
      transform: "scale(1.08)",
    },
  },
});

export const quoteOverlay = style({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: vars.space.gutter,
});

export const sparkDecor = style({
  position: "absolute",
  top: "-16px",
  right: "-8px",
  width: "48px",
  height: "48px",
  backgroundColor: "rgba(252, 212, 0, 0.2)",
  borderRadius: vars.radii.full,
  filter: "blur(16px)",
  pointerEvents: "none",
});

export const connectionSpark = style({
  filter: "drop-shadow(0 0 8px rgba(252, 212, 0, 0.6))",
});
