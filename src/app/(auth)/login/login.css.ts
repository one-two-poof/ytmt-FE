import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.65 },
});

export const loginRoot = style({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: vars.color.surface,
  color: vars.color.onSurface,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  lineHeight: vars.lineHeight.relaxed,
});

export const decor1 = style({
  position: "fixed",
  top: "-10%",
  left: "-10%",
  width: "60%",
  height: "60%",
  background:
    "radial-gradient(circle, rgba(93, 95, 239, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
  filter: "blur(60px)",
  zIndex: -1,
  pointerEvents: "none",
});

export const decor2 = style({
  position: "fixed",
  bottom: "-5%",
  right: "-5%",
  width: "50%",
  height: "50%",
  background:
    "radial-gradient(circle, rgba(252, 212, 0, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
  filter: "blur(60px)",
  zIndex: -1,
  pointerEvents: "none",
});

export const main = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
});

export const logoSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.stackMd,
  textAlign: "center",
  marginBottom: "64px",
});

export const logoGlowWrap = style({
  position: "relative",
});

export const logoBlur = style({
  position: "absolute",
  inset: "-32px",
  backgroundColor: "rgba(67, 67, 213, 0.1)",
  filter: "blur(24px)",
  borderRadius: vars.radii.full,
});

export const logoTitle = style({
  position: "relative",
  fontSize: "48px",
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.primary,
  textShadow: "0 0 20px rgba(67, 67, 213, 0.3)",
});

export const tagline = style({
  fontSize: vars.fontSize.bodyLg,
  color: vars.color.onSurfaceVariant,
  maxWidth: "280px",
  lineHeight: vars.lineHeight.relaxed,
});

export const connectionRow = style({
  width: "100%",
  maxWidth: "320px",
  marginBottom: vars.space.stackLg,
  position: "relative",
  height: "96px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const connectionLine = style({
  position: "absolute",
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(199, 196, 215, 0.3)",
});

export const connectionIcons = style({
  display: "flex",
  gap: "48px",
  position: "relative",
  alignItems: "center",
});

export const glassOrb = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.radii.full,
  background: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 24px rgba(67, 67, 213, 0.08)",
});

export const sparkWrap = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const sparkPulse = style({
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const footer = style({
  padding: vars.space.marginMobile,
  paddingBottom: "64px",
  width: "100%",
  maxWidth: "448px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.gutter,
});

export const kakaoBtn = style({
  width: "100%",
  height: "56px",
  borderRadius: vars.radii.full,
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  fontSize: "16px",
  fontWeight: vars.fontWeight.bold,
  letterSpacing: vars.letterSpacing.wide,
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s, transform 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.secondaryFixed,
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
});

export const footerNote = style({
  textAlign: "center",
  fontSize: "12px",
  color: vars.color.outline,
  opacity: 0.6,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wide,
});

globalStyle(`${loginRoot} ::selection`, {
  backgroundColor: vars.color.primaryFixed,
});
