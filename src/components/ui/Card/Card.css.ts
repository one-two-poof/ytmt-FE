import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const base = style({
  borderRadius: vars.radii["2xl"],
  padding: vars.space.stackMd,
  background: vars.glass.surface,
  backdropFilter: vars.glass.blur,
  WebkitBackdropFilter: vars.glass.blur,
  border: `1px solid ${vars.glass.border}`,
  boxShadow: vars.shadow.card,
  transition: "box-shadow 0.2s ease, transform 0.2s ease",
});

export const variants = styleVariants({
  default: {},
  interactive: {
    cursor: "pointer",
    selectors: {
      "&:hover": {
        boxShadow: vars.shadow.cardHover,
        transform: "translateY(-2px)",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },
  },
  flat: {
    background: vars.color.surfaceContainerLowest,
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: `1px solid ${vars.color.outlineVariant}`,
    boxShadow: "none",
  },
});
