import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const base = style({
  display: "inline-block",
  borderRadius: vars.radii.full,
  borderStyle: "solid",
  borderColor: `${vars.color.outlineVariant} ${vars.color.outlineVariant} ${vars.color.outlineVariant} ${vars.color.primary}`,
  animation: `${spin} 0.7s linear infinite`,
  flexShrink: 0,
});

export const sizes = styleVariants({
  sm: { width: "16px", height: "16px", borderWidth: "2px" },
  md: { width: "24px", height: "24px", borderWidth: "2.5px" },
  lg: { width: "36px", height: "36px", borderWidth: "3px" },
});

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const fullScreen = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(247, 249, 252, 0.8)",
  backdropFilter: "blur(4px)",
  zIndex: 50,
});
