import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  height: "100%",
  background: vars.color.background,
  color: vars.color.onBackground,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.bodyMd,
  lineHeight: vars.lineHeight.relaxed,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button", {
  cursor: "pointer",
  border: "none",
  background: "none",
  font: "inherit",
});

globalStyle("input, textarea", {
  font: "inherit",
});
