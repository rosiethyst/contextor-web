# Contextor Design System

Based on Revolut's design language — flat, confident, typographic.

## 1. Visual Theme & Mood

- Billboard-scale typography with generous whitespace
- Communicates capability and professional trust
- Intentionally flat — zero shadows, depth through color contrast only
- Density: spacious, breathing room between elements

## 2. Color Palette

| Token | Hex | Role |
|---|---|---|
| `primary-dark` | #191c1f | Text, dark surfaces, primary buttons |
| `primary-light` | #ffffff | Backgrounds |
| `interactive` | #494fdf | CTAs, links, accents |
| `action` | #4f55f1 | Hover states for interactive elements |
| `gray-50` | #fafafa | Subtle backgrounds |
| `gray-100` | #f5f5f5 | Section alternation, card backgrounds |
| `gray-200` | #e8e8e8 | Borders, dividers |
| `gray-500` | #6b7280 | Secondary text |
| `gray-700` | #374151 | Body text |

Marketing surfaces stay near-black/white. Semantic colors reserved for product UI.

## 3. Typography

| Role | Font | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| Display (Hero) | Geist Sans | 72–136px | 500 | 1.00 | tight |
| H2 (Section) | Geist Sans | 48–56px | 500 | 1.10 | tight |
| H3 (Card) | Inter | 20–24px | 600 | 1.30 | normal |
| Body | Inter | 16–18px | 400 | 1.60 | normal |
| Small | Inter | 14px | 400 | 1.50 | normal |

**Principle:** Authority comes from size and tracking, never from bold weight. Max weight is 600 for card titles, 500 for everything else.

## 4. Component Styling

### Buttons
- Shape: pill (`border-radius: 9999px`)
- Padding: `14px 32px`
- Primary: `bg-primary-dark`, white text
- Accent: `bg-interactive`, white text
- Secondary: light bg, dark text, border
- Hover: `opacity: 0.85`

### Cards
- `border-radius: 20px`
- No shadow — background color contrast only
- Padding: `32px`
- Background: `gray-100` on white sections, `primary-light` on gray sections

### Navigation
- Sticky top bar, translucent with backdrop blur
- Logo text left, links right
- Border-bottom: `gray-200`

## 5. Layout Principles

- Base unit: `8px`
- Section vertical padding: `80–120px`
- Max content width: `1200px`, centered
- Card grid gap: `24px`
- Horizontal padding: `24px` (mobile), `48px` (desktop)

## 6. Depth & Elevation

**Zero shadows.** Depth is expressed through:
- Background color alternation (white ↔ gray-100)
- Border (`gray-200`) for structural separation
- Backdrop blur on sticky header

## 7. Do / Don't

| Do | Don't |
|---|---|
| Use whitespace generously | Add drop shadows |
| Let typography create hierarchy | Use bold weights above 600 |
| Keep color palette minimal | Introduce gradients |
| Use pill buttons consistently | Mix button shapes |
| Flat surfaces, color contrast for depth | Use elevation/box-shadow |
| Alternate section backgrounds | Make all sections same color |

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px (mobile) | Stack layout, reduced type scale, full-width cards |
| 768–1024px (tablet) | 2-column grid |
| > 1024px (desktop) | Full grid, max typography |

Touch targets: minimum 44px height on mobile.

## 9. Agent Prompt Guide

When generating UI for Contextor:
- Use `font-display` for headings, `font-body` for text
- Background colors: alternate `bg-primary-light` and `bg-gray-100` between sections
- All buttons are pills: `rounded-full`
- No shadows anywhere — use `bg-gray-100` for card depth
- Section padding: `py-20 md:py-28`
- Max width container: `max-w-[1200px] mx-auto px-6`
- Interactive color for links and accent buttons: `text-interactive`
