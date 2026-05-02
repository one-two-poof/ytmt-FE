import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: vars.radii.full,
  overflow: "hidden",
  backgroundColor: vars.color.primaryContainer,
  color: vars.color.onPrimaryContainer,
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.semibold,
  userSelect: "none",
  border: `2px solid ${vars.glass.border}`,
});

export const sizes = styleVariants({
  sm: { width: "32px", height: "32px", fontSize: vars.fontSize.labelSm },
  md: { width: "44px", height: "44px", fontSize: vars.fontSize.bodyMd },
  lg: { width: "64px", height: "64px", fontSize: vars.fontSize.bodyLg },
  xl: { width: "88px", height: "88px", fontSize: "28px" },
});

export const img = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
