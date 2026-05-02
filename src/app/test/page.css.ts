import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const page = style({
  minHeight: "100vh",
  backgroundColor: vars.color.background,
  padding: "40px 20px",
  fontFamily: vars.font.sans,
});

export const header = style({
  marginBottom: vars.space.stackLg,
  paddingBottom: vars.space.stackMd,
  borderBottom: `1px solid ${vars.color.outlineVariant}`,
});

export const title = style({
  fontSize: vars.fontSize.h1,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.onBackground,
  letterSpacing: vars.letterSpacing.tight,
  margin: 0,
});

export const subtitle = style({
  marginTop: "8px",
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurfaceVariant,
});

export const section = style({
  marginBottom: vars.space.stackLg,
});

export const sectionTitle = style({
  fontSize: vars.fontSize.h2,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.onBackground,
  letterSpacing: vars.letterSpacing.snug,
  marginBottom: vars.space.stackMd,
  paddingBottom: "8px",
  borderBottom: `2px solid ${vars.color.primary}`,
  display: "inline-block",
});

export const row = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",
});

export const col = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const label = style({
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.outline,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: "uppercase",
  marginBottom: "8px",
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "16px",
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const cardText = style({
  fontSize: vars.fontSize.bodyMd,
  color: vars.color.onSurface,
  lineHeight: vars.lineHeight.relaxed,
  margin: 0,
});

export const cardMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const inputGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "16px",
});

export const divider = style({
  height: "1px",
  backgroundColor: vars.color.outlineVariant,
  marginBottom: vars.space.stackLg,
});
