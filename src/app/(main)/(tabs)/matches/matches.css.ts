import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  backgroundColor: vars.color.background,
  color: vars.color.onBackground,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
});

export const headerBtn = style({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.primary,
  borderRadius: vars.radii.full,
  transition: "transform 0.2s",
  selectors: {
    "&:active": { transform: "scale(0.95)" },
  },
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
  borderBottom: "1px solid rgba(255,255,255,0.4)",
  boxShadow: "0 4px 30px rgba(93,95,239,0.05)",
});

export const headerTitle = style({
  fontFamily: vars.font.sans,
  fontSize: "18px",
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
});

export const avatar = style({
  width: "40px",
  height: "40px",
  borderRadius: vars.radii.full,
  overflow: "hidden",
  border: `2px solid rgba(93, 95, 239, 0.15)`,
});

export const avatarImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const main = style({
  paddingTop: "96px",
  paddingBottom: "128px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackMd,
});

export const sectionLead = style({
  marginBottom: "8px",
});

export const eyebrow = style({
  color: vars.color.primary,
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wide,
  marginBottom: "4px",
});

export const h2 = style({
  fontSize: vars.fontSize.h1,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
});

export const card = style({
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "24px",
  padding: vars.space.stackMd,
  boxShadow: "0 8px 32px rgba(93,95,239,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackSm,
  position: "relative",
  overflow: "hidden",
});

export const matchBadge = style({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "rgba(252,212,0,0.2)",
  color: vars.color.secondary,
  padding: "4px 12px",
  borderRadius: vars.radii.full,
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const row = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "8px",
});

export const miniAvatar = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.radii.full,
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
});

export const quote = style({
  fontSize: vars.fontSize.bodyLg,
  color: vars.color.onSurfaceVariant,
  lineHeight: vars.lineHeight.relaxed,
});

export const chatBtn = style({
  marginTop: "8px",
  width: "100%",
  backgroundColor: vars.color.primaryContainer,
  color: vars.color.onPrimaryContainer,
  padding: "16px",
  borderRadius: vars.radii.full,
  border: "none",
  cursor: "pointer",
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wide,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textDecoration: "none",
  transition: "transform 0.2s",
  selectors: {
    "&:active": { transform: "scale(0.95)" },
  },
});

export const fab = style({
  position: "fixed",
  bottom: "calc(96px + env(safe-area-inset-bottom, 0px))",
  right: "20px",
  width: "56px",
  height: "56px",
  borderRadius: vars.radii.full,
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  zIndex: 40,
  transition: "transform 0.3s",
  selectors: {
    "&:active": { transform: "scale(0.9)" },
  },
});
