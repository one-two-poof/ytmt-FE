---
name: TOGETTHERE (너도나도)
colors:
  surface: "#f7f9fc"
  surface-dim: "#d8dadd"
  surface-bright: "#f7f9fc"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f7"
  surface-container: "#eceef1"
  surface-container-high: "#e6e8eb"
  surface-container-highest: "#e0e3e6"
  on-surface: "#191c1e"
  on-surface-variant: "#464555"
  inverse-surface: "#2d3133"
  inverse-on-surface: "#eff1f4"
  outline: "#767586"
  outline-variant: "#c7c4d7"
  surface-tint: "#4849da"
  primary: "#4343d5"
  on-primary: "#ffffff"
  primary-container: "#5d5fef"
  on-primary-container: "#faf7ff"
  inverse-primary: "#c1c1ff"
  secondary: "#705d00"
  on-secondary: "#ffffff"
  secondary-container: "#fcd400"
  on-secondary-container: "#6e5c00"
  tertiary: "#595a57"
  on-tertiary: "#ffffff"
  tertiary-container: "#72726f"
  on-tertiary-container: "#faf8f4"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e1e0ff"
  primary-fixed-dim: "#c1c1ff"
  on-primary-fixed: "#07006c"
  on-primary-fixed-variant: "#2e2bc2"
  secondary-fixed: "#ffe16d"
  secondary-fixed-dim: "#e9c400"
  on-secondary-fixed: "#221b00"
  on-secondary-fixed-variant: "#544600"
  tertiary-fixed: "#e4e2de"
  tertiary-fixed-dim: "#c8c6c3"
  on-tertiary-fixed: "#1b1c1a"
  on-tertiary-fixed-variant: "#474744"
  background: "#f7f9fc"
  on-background: "#191c1e"
  surface-variant: "#e0e3e6"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style

The brand identity centers on the Korean concept of "너도나도" (meaning "everyone together" or "you and I both"), fostering a sense of shared human experience and empathy. The design system prioritizes emotional resonance over clinical utility, aiming to feel like a warm, digital embrace.

The visual style is **Soft-Minimalism infused with Glassmorphism**. It utilizes translucent layers to represent the overlapping of lives and thoughts. The interface remains quiet and spacious to allow user stories and long-form reflections to breathe, while subtle motion and depth create a tactile, high-end feel appropriate for a modern web application.

## Colors

The palette is anchored by **Soft Indigo**, a color that evokes deep thought and the twilight hour when people often share their most honest feelings. **Warm White** serves as the primary canvas, providing a more inviting and organic feel than pure clinical white.

The **Spark Gold** accent is used sparingly—only for moments of true connection, active highlights, or "aha" moments. This high-contrast pairing between the cool indigo and warm gold symbolizes a spark of light in the darkness of isolation. Backgrounds should utilize very light gray transitions to define different content zones without using harsh lines.

## Typography

This design system uses **Plus Jakarta Sans** for its friendly, open apertures and modern geometric feel, which closely mirrors the characteristics of Pretendard while offering a more rhythmic flow for English and alphanumeric characters.

The focus is on **readability for long-form sentences**. Line heights are generous (1.6x) to prevent eye fatigue during deep reading. Headlines use tighter letter spacing and heavier weights to provide a strong visual anchor against the soft background elements. For Korean text implementation, ensure the "Pretendard" font-face is set as the primary fallback to maintain the same clean, modern aesthetic across languages.

## Layout & Spacing

This design system adopts a **Mobile-First Fluid Grid** model. On mobile devices, the layout uses a single-column structure with 20px side margins to create a sense of focused intimacy.

The spacing rhythm follows an 8px base unit. Negative space is treated as a functional element—large "stack" gaps (40px+) are used between major content sections to signify a change in thought or topic, preventing the UI from feeling cluttered or overwhelming. Elements within cards should use the `stack-sm` or `stack-md` units to maintain a tight, cohesive relationship.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Ambient Shadows**. Rather than traditional heavy shadows, the design system uses "Light-Leaking Shadows"—extra-diffused (30px-50px blur) with a very low opacity (5-10%) and a slight tint of the primary Indigo.

**Glassmorphism Specs:**

- **Background Blur:** 12px to 20px.
- **Surface:** White at 70-85% opacity.
- **Border:** A 1px translucent inner stroke (White at 40% opacity) to catch the light and define the edge of the card.

This creates a "stacked paper" effect where content feels like it is floating in a soft, ethereal space.

## Shapes

The shape language is defined by **Large Radii**, reinforcing the "softness" keyword.

Standard components (buttons, input fields) use a 0.5rem (8px) radius. However, container elements like cards and modal sheets use `rounded-xl` (1.5rem / 24px) to create a friendly, pebble-like appearance. Interactive elements that signify "connection" (like avatars or floating action buttons) may use pill-shapes to differentiate them from static content containers.

## Components

### Buttons & Interaction

- **Primary Button:** Solid Soft Indigo with white text. High roundedness. Subtle "glow" shadow on hover.
- **Secondary/Ghost:** Spark Gold text with a very faint gold tinted background (5% opacity).
- **Floating Action Button:** Used for "Sharing a Thought." Always pill-shaped and utilizes the Spark Gold accent.

### Cards (The "Connection" Card)

The core component of the app. Features a glassmorphism background, 24px corner radius, and a subtle indigo-tinted shadow. Content inside should have generous padding (24px).

### Input Fields

Soft Cloud Gray backgrounds with no initial border. Upon focus, they transition to a 1px Soft Indigo border with a very soft focus ring.

### Shared Narrative Elements

- **Connection Indicators:** Small gold "spark" icons or dots used to indicate where two users' thoughts overlap.
- **Progressive Disclosure:** Use soft fades (opacity 0 to 1) for loading long sentences to make the reading experience feel calm and intentional.
