import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  flex: 1,
  minHeight: 0,
  width: "100%",
  backgroundColor: vars.color.surface,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurface,
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
  fontSize: "18px",
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
});

export const avatarSm = style({
  width: "40px",
  height: "40px",
  borderRadius: vars.radii.full,
  overflow: "hidden",
  border: `2px solid ${vars.color.primaryFixed}`,
});

export const main = style({
  paddingTop: "96px",
  paddingBottom: "128px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  maxWidth: "672px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackLg,
});

export const glass = style({
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "24px",
  boxShadow: "0 10px 40px -10px rgba(67,67,213,0.1)",
});

export const profileSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space.stackSm,
});

export const profileImgWrap = style({
  position: "relative",
});

export const profileImg = style({
  width: "128px",
  height: "128px",
  borderRadius: vars.radii.full,
  overflow: "hidden",
  border: "4px solid #fff",
  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
});

export const editFab = style({
  position: "absolute",
  bottom: "4px",
  right: "4px",
  width: "36px",
  height: "36px",
  borderRadius: vars.radii.full,
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
});

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.space.gutter,
});

export const statCard = style([
  glass,
  {
    padding: vars.space.gutter,
    textAlign: "center",
  },
]);

export const sentenceCard = style([
  glass,
  {
    padding: vars.space.stackMd,
    position: "relative",
  },
]);

export const menu = style([
  glass,
  {
    overflow: "hidden",
  },
]);

export const menuRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space.stackMd,
  borderBottom: "1px solid rgba(255,255,255,0.4)",
  textDecoration: "none",
  color: "inherit",
  transition: "background 0.2s",
  selectors: {
    "&:last-child": { borderBottom: "none" },
    "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
  },
});

export const menuIconWrap = style({
  width: "40px",
  height: "40px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const logoutBtn = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space.stackMd,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  font: "inherit",
  selectors: {
    "&:hover": { backgroundColor: "rgba(186,26,26,0.05)" },
  },
});
