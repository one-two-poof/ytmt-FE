import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const nav = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "80px",
  paddingLeft: vars.space.marginMobile,
  paddingRight: vars.space.marginMobile,
  paddingBottom: `max(12px, env(safe-area-inset-bottom, 0px))`,
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  borderTop: `1px solid rgba(255, 255, 255, 0.4)`,
  borderTopLeftRadius: "24px",
  borderTopRightRadius: "24px",
  boxShadow: "0 -8px 32px rgba(93, 95, 239, 0.08)",
  width: "100%",
});

export const link = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  color: "#94a3b8",
  fontSize: "10px",
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.semibold,
  textDecoration: "none",
  transition: "color 0.2s ease, transform 0.2s ease",
  selectors: {
    "&:hover": {
      color: vars.color.primary,
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
});

export const linkActive = style([
  link,
  {
    color: vars.color.primary,
    position: "relative",
    selectors: {
      "&::after": {
        content: "''",
        position: "absolute",
        top: "-4px",
        width: "4px",
        height: "4px",
        borderRadius: vars.radii.full,
        backgroundColor: "#fbbf24",
      },
    },
  },
]);
