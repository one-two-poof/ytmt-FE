import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const base = style({
  width: "100%",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  fontWeight: vars.fontWeight.regular,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.onSurface,
  backgroundColor: vars.color.surfaceContainerLow,
  border: `1px solid transparent`,
  borderRadius: vars.radii.md,
  padding: `12px 16px`,
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: vars.color.outline,
    },
    "&:focus": {
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 3px rgba(67, 67, 213, 0.10)`,
      backgroundColor: vars.color.surfaceContainerLowest,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const error = style({
  borderColor: vars.color.error,
  selectors: {
    "&:focus": {
      borderColor: vars.color.error,
      boxShadow: `0 0 0 3px rgba(186, 26, 26, 0.10)`,
    },
  },
});

export const errorMessage = style({
  display: "block",
  marginTop: "6px",
  fontSize: vars.fontSize.labelSm,
  color: vars.color.error,
  fontFamily: vars.font.sans,
});

export const label = style({
  display: "block",
  marginBottom: "8px",
  fontSize: vars.fontSize.labelSm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.onSurfaceVariant,
  fontFamily: vars.font.sans,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: "uppercase",
});

export const wrapper = style({
  width: "100%",
});
