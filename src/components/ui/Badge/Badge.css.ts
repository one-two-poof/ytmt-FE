import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.none,
  letterSpacing: vars.letterSpacing.wide,
  padding: "5px 10px",
  borderRadius: vars.radii.full,
  whiteSpace: "nowrap",
});

export const variants = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.onPrimary,
  },
  spark: {
    backgroundColor: vars.color.secondaryContainer,
    color: vars.color.onSecondaryContainer,
  },
  surface: {
    backgroundColor: vars.color.surfaceContainerHigh,
    color: vars.color.onSurfaceVariant,
  },
  outline: {
    backgroundColor: "transparent",
    color: vars.color.onSurfaceVariant,
    border: `1px solid ${vars.color.outlineVariant}`,
  },
});

export const dot = style({
  width: "6px",
  height: "6px",
  borderRadius: vars.radii.full,
  backgroundColor: "currentColor",
  flexShrink: 0,
});
