import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    // Surface
    surface: "#f7f9fc",
    surfaceContainer: "#eceef1",
    surfaceContainerLow: "#f2f4f7",
    surfaceContainerHigh: "#e6e8eb",
    surfaceContainerLowest: "#ffffff",
    onSurface: "#191c1e",
    onSurfaceVariant: "#464555",

    // Primary (Soft Indigo)
    primary: "#4343d5",
    primaryContainer: "#5d5fef",
    onPrimary: "#ffffff",
    onPrimaryContainer: "#faf7ff",
    inversePrimary: "#c1c1ff",

    // Secondary (Spark Gold)
    secondary: "#705d00",
    secondaryContainer: "#fcd400",
    onSecondary: "#ffffff",
    onSecondaryContainer: "#6e5c00",

    // Outline
    outline: "#767586",
    outlineVariant: "#c7c4d7",

    // Background
    background: "#f7f9fc",
    onBackground: "#191c1e",

    // Error
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    tertiary: "#595a57",
    onTertiary: "#ffffff",
    tertiaryContainer: "#72726f",
    onTertiaryContainer: "#faf8f4",
    secondaryFixed: "#ffe16d",
    secondaryFixedDim: "#e9c400",
    primaryFixed: "#e1e0ff",
    onPrimaryFixed: "#07006c",
  },
  font: {
    sans: "'Plus Jakarta Sans', 'Pretendard', sans-serif",
  },
  fontSize: {
    h1: "32px",
    h2: "24px",
    bodyLg: "18px",
    bodyMd: "16px",
    labelSm: "13px",
  },
  fontWeight: {
    regular: "400",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.2",
    snug: "1.3",
    relaxed: "1.6",
    none: "1",
  },
  letterSpacing: {
    tight: "-0.02em",
    snug: "-0.01em",
    normal: "0",
    wide: "0.05em",
  },
  radii: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  space: {
    base: "8px",
    marginMobile: "20px",
    gutter: "16px",
    stackSm: "12px",
    stackMd: "24px",
    stackLg: "40px",
  },
  shadow: {
    card: "0 8px 40px rgba(67, 67, 213, 0.08)",
    cardHover: "0 12px 50px rgba(67, 67, 213, 0.12)",
    button: "0 4px 30px rgba(67, 67, 213, 0.25)",
  },
  glass: {
    blur: "blur(16px)",
    surface: "rgba(255, 255, 255, 0.80)",
    border: "rgba(255, 255, 255, 0.40)",
  },
  /** 단일 모바일 컬럼 폭 (큰 화면에서는 중앙 프레임) */
  layout: {
    mobileMaxWidth: "430px",
  },
});
