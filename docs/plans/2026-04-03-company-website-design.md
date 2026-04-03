# Contextor Company Website — Design Document

## Purpose

Apple Developer Program 조직 등록 심사 통과를 위한 회사 소개 웹사이트.
이후 마케팅/브랜딩 사이트로 확장 예정.

## Site Info

| Key | Value |
|---|---|
| URL | https://contextor.cc |
| Company | Contextor Co., LTD. |
| Address (EN) | 1310, 298 Nangok-ro, Gwanak-gu, Seoul, South Korea |
| Address (KR) | 서울시 관악구 난곡로 298 1310호 |
| Email | admin@contextor.cc |
| Business Reg. | 797-88-03642 |

## Apple Developer Program Requirements

- [x] Company name clearly displayed
- [x] Description of business activities
- [x] Physical address
- [x] Contact email
- [x] Privacy Policy page
- [x] SSL (Vercel auto)
- [x] Domain matching company name

## Page Structure

### Main Page (/)

Single-page landing with scroll sections:

1. **Hero** — Company name, tagline, CTA (Contact Us)
2. **About** — Who we are: app development studio & consulting firm
3. **Services** — Card grid: App Development, Consulting, Custom Solutions
4. **Contact** — Email, address, business registration number
5. **Footer** — Copyright, privacy policy link, business info

### Privacy Policy (/privacy)

Standard privacy policy page covering:
- Data collection and usage
- Third-party services
- User rights
- Contact for privacy inquiries

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |
| Domain | contextor.cc |
| Language | English (primary) |
| Dependencies | Minimal — no external UI libs |

## Design System — Revolut-Inspired

Based on the Revolut DESIGN.md from awesome-design-md.

### Visual Theme

- Billboard-scale typography with generous whitespace
- Communicates capability and trust
- Intentionally flat — zero shadows, depth through color contrast only

### Color Palette

| Token | Hex | Role |
|---|---|---|
| Primary Dark | #191c1f | Text, dark surfaces |
| Primary Light | #ffffff | Backgrounds |
| Interactive Blue | #494fdf | CTAs, links, accents |
| Action Blue | #4f55f1 | Hover states |
| Gray 100 | #f5f5f5 | Section alternation |
| Gray 200 | #e8e8e8 | Borders, dividers |
| Gray 500 | #6b7280 | Secondary text |

### Typography

| Role | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Display (Hero) | Aeonik Pro / Geist | 72–136px | 500 | 1.00 |
| H2 (Section) | Aeonik Pro / Geist | 48–56px | 500 | 1.10 |
| H3 (Card) | Inter | 24px | 600 | 1.30 |
| Body | Inter | 16–18px | 400 | 1.60 |
| Small | Inter | 14px | 400 | 1.50 |

> Note: If Aeonik Pro is unavailable (commercial license), use Geist (Vercel's open-source font) as a substitute — similar geometric sans-serif feel.

### Components

**Buttons**
- Pill shape: `border-radius: 9999px`
- Padding: `14px 32px`
- Primary: dark bg (#191c1f), white text
- Secondary: light bg, dark text
- Hover: `opacity: 0.85`

**Cards**
- `border-radius: 20px`
- No shadow — use background color contrast
- Padding: `32px`

**Navigation**
- Minimal top bar, logo left, links right
- Sticky on scroll

### Layout

- Base unit: `8px`
- Section spacing: `80–120px` vertical padding
- Max content width: `1200px`, centered
- Card grid: responsive, `gap: 24px`

### Responsive

| Breakpoint | Behavior |
|---|---|
| < 768px | Stack layout, reduced typography scale |
| 768–1024px | 2-column grid |
| > 1024px | Full 3-column grid, max typography |

### Do / Don't

| Do | Don't |
|---|---|
| Use whitespace generously | Add drop shadows |
| Let typography create hierarchy | Use bold weights (500 max) |
| Keep color palette minimal | Introduce gradients |
| Use pill buttons consistently | Mix button shapes |
| Flat surfaces, color contrast for depth | Use elevation/box-shadow |

## Project Structure

```
contextor-web/
├── src/app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── privacy/
│       └── page.tsx
├── src/components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── (logo, OG image)
├── DESIGN.md
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Content Direction

- **Tagline**: "Building apps that matter." (or similar — concise, confident)
- **About**: Contextor is a Seoul-based app development studio and consulting firm. We design, build, and ship products across platforms.
- **Services**: App Development / Technical Consulting / Custom Solutions
- **Tone**: Professional, confident, minimal. No fluff.

## Implementation Sequence

1. Project scaffolding (Next.js + Tailwind + Git init)
2. DESIGN.md creation (Revolut-based, customized for Contextor)
3. Layout + Header + Footer
4. Hero section
5. About section
6. Services section
7. Contact section
8. Privacy Policy page
9. SEO (metadata, OG tags, sitemap)
10. Vercel deployment + domain connection
