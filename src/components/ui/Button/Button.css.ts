import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.none,
  letterSpacing: vars.letterSpacing.normal,
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  textDecoration: "none",
  whiteSpace: "nowrap",
  selectors: {
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

export const variants = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.onPrimary,
    borderRadius: vars.radii.md,
    padding: `14px 24px`,
    boxShadow: vars.shadow.button,
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.primaryContainer,
        boxShadow: `0 6px 36px rgba(67, 67, 213, 0.35)`,
        transform: "translateY(-1px)",
      },
      "&:active:not(:disabled)": {
        transform: "translateY(0)",
      },
    },
  },
  ghost: {
    backgroundColor: "rgba(252, 212, 0, 0.06)",
    color: vars.color.secondary,
    borderRadius: vars.radii.md,
    padding: `14px 24px`,
    border: `1px solid rgba(252, 212, 0, 0.20)`,
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: "rgba(252, 212, 0, 0.12)",
      },
    },
  },
  fab: {
    backgroundColor: vars.color.secondaryContainer,
    color: vars.color.onSecondaryContainer,
    borderRadius: vars.radii.full,
    padding: `16px 28px`,
    fontSize: vars.fontSize.bodyMd,
    boxShadow: `0 4px 24px rgba(252, 212, 0, 0.40)`,
    selectors: {
      "&:hover:not(:disabled)": {
        boxShadow: `0 6px 32px rgba(252, 212, 0, 0.55)`,
        transform: "translateY(-1px)",
      },
      "&:active:not(:disabled)": {
        transform: "translateY(0)",
      },
    },
  },
});

export const sizes = styleVariants({
  sm: { fontSize: vars.fontSize.labelSm, padding: `10px 16px` },
  md: {},
  lg: { fontSize: vars.fontSize.bodyLg, padding: `16px 32px` },
});

export const fullWidth = style({ width: "100%" });
