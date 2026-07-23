---
name: Electric Noir
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#debdd0'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a68899'
  outline-variant: '#58404f'
  surface-tint: '#ffade2'
  primary: '#ffade2'
  on-primary: '#5f004e'
  primary-container: '#ff2fd6'
  on-primary-container: '#530044'
  inverse-primary: '#af0092'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#d1bcff'
  on-tertiary: '#3c0090'
  tertiary-container: '#a178ff'
  on-tertiary-container: '#34007f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd8ee'
  primary-fixed-dim: '#ffade2'
  on-primary-fixed: '#3b002f'
  on-primary-fixed-variant: '#86006f'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system embodies a high-energy, luxury nightlife aesthetic. It targets a sophisticated, tech-savvy audience looking for exclusivity and pulse-pounding excitement. The UI is designed to evoke a sense of midnight adrenaline, premium status, and digital futurism.

The design style is a hybrid of **Minimalism** and **Vaporwave-Futurism**. It utilizes a deep, dark canvas to allow vibrant neon elements to pop, creating a "glow-in-the-dark" interface. Structural elements remain clean and functional, while interactive components and accents utilize intense light effects to guide the user's eye.

## Colors
The palette is rooted in a "Midnight Black" neutral base to ensure maximum contrast for the neon highlights.

- **Primary (Electric Pink):** The core brand color, used for high-impact actions, brand-marks, and active states.
- **Primary Container:** A deep, desaturated plum used for subtle background surfacing behind primary elements.
- **Secondary (Cyan):** A high-contrast counterpoint used for secondary information or success states.
- **Tertiary (Electric Violet):** Used for decorative gradients and depth.
- **Glows & Accents:** All primary interactions should feature an outer glow or "bloom" effect using the primary pink at varied opacities.

## Typography
The typography strategy pairs technical precision with aggressive geometry. 

**Space Grotesk** is reserved for headlines to provide a futuristic, wide-set character. **Hanken Grotesk** provides a clean, highly legible experience for body copy, ensuring the interface remains functional despite the high-contrast color scheme. **Geist** is used for labels and technical data to reinforce the developer-grade precision of the "nightlife tech" vibe. Use uppercase for labels to enhance the premium, architectural feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile devices. 

- **Desktop:** 12-column grid with 24px gutters and wide 64px margins to create a sense of luxury through whitespace (or "darkspace").
- **Mobile:** 4-column fluid grid with 16px margins.
- **Rhythm:** All spacing (padding, margins, gap) must be multiples of the 8px base unit. Use generous padding inside cards and sections to maintain the minimalist, airy aesthetic.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Neon Diffusion** rather than traditional drop shadows.

1.  **Base Layer:** The darkest neutral (#0A0A0B).
2.  **Surface Layer:** Raised elements (cards, menus) use a slightly lighter grey (#161618) with a 1px thin border of #262629.
3.  **Neon Glows:** Active elements do not cast shadows; they emit light. Use a `box-shadow` with a 0px offset and 15px-30px blur using the Primary Pink at 30-50% opacity to simulate a neon tube effect.
4.  **Glass:** Overlays use a backdrop-filter (blur: 12px) with a semi-transparent dark fill to maintain context of the underlying "vibe."

## Shapes
The shape language is strictly **Sharp**. 

0px border radii are used across all components (buttons, cards, inputs) to convey a sense of edge, precision, and architectural brutality. This sharp geometry contrasts with the soft, diffused neon glows, creating a sophisticated tension between the rigid structure and the fluid light.

## Components

- **Buttons:** Primary buttons feature a solid Primary Pink background with black text. On hover, the button triggers a heavy external neon glow. Ghost buttons use a 1px Primary Pink border.
- **Chips:** Small, sharp-edged rectangles with a dark background and Primary Pink text. Used for categories or status tags.
- **Lists:** Clean rows separated by low-contrast #262629 borders. Active items are indicated by a 2px vertical Primary Pink stripe on the left edge.
- **Input Fields:** Sharp 1px borders in neutral grey. Upon focus, the border transitions to Primary Pink with a subtle inner glow.
- **Cards:** No shadow. Sharp corners. Background is a step lighter than the base (#161618). 
- **Neon Dividers:** Occasionally use a gradient line (Transparent -> Primary Pink -> Transparent) to separate major sections.