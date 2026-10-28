# Comprehensive Design & Architectural Analysis
## Reference: https://cassian-norrell.framer.website/
## Rebrand Target: Stream Forge Studios

---

## 1. Sitemap & Route Architecture

The reference site is a cinematic multi-page portfolio built in Framer with CMS-driven dynamic project routes and legal pages. All routes are mapped to corresponding Next.js App Router pages:

| Route Path | Page Title / Purpose | Reference Equivalent | Template Purpose |
| :--- | :--- | :--- | :--- |
| `/` | **Home Page** | `/` | Hero showreel, narrative intro, selected work grid, sticky reel feature, process steps, service breakdown, FAQ accordion, footer. |
| `/works` | **Work Archive** | `/works` | Full project archive with category filtering and hover video cards. Headline: *"WE LISTEN. WE CRAFT. WE DELIVER."* |
| `/works/[slug]` | **Project Detail Page** | `/works/:slug` | Immersive media showcase, client/role/year metadata, production story, deliverables gallery, next/prev project navigation. |
| `/about` | **About / Studio Story** | `/about` | Studio vision, movement & dance storytelling philosophy, behind-the-scenes gallery, creator credentials. |
| `/contact` | **Contact & Inquiries** | `/contact` | High-impact booking headline, interactive inquiry form, direct email/phone, social studio channels. |
| `/legal/privacy-policy` | **Privacy Policy** | `/legal/privacy-policy` | Clean dark-mode legal documentation layout with numbered sections. |
| `/legal/terms-of-service`| **Terms of Service** | `/legal/terms-of-service`| Studio usage terms, copyright guidelines, service agreements. |
| `/_not-found` | **404 Not Found** | `/404` | Minimalist branded 404 page with return home CTA. |

---

## 2. Layout Structure & Breakpoints

The design uses an obsidian-black dark-mode canvas with rigid typographic grids, generous vertical whitespace, and modular cards.

### Breakpoints
- **Desktop (Large Canvas)**: `min-width: 1200px` (Designed for 1440px viewport)
- **Tablet (Medium Canvas)**: `min-width: 810px` and `max-width: 1199.98px` (Designed for 768px viewport)
- **Mobile (Small Canvas)**: `max-width: 809.98px` (Designed for 390px viewport, scales down to 320px)

### Container Widths & Padding
- **Max Content Container Width**: `1160px` centered (`margin: 0 auto; width: 100%; max-width: 1160px;`)
- **Full Width Sections / Media**: `100vw` with internal gutters.
- **Section Padding**:
  - **Desktop (1440px)**:
    - Standard section: `padding: 100px 40px;`
    - Hero section: `padding: 120px 40px 60px;`
    - Sticky Reel section: `padding: 80px 40px;`
  - **Tablet (768px)**:
    - Standard section: `padding: 100px 24px;`
    - Hero section: `padding: 100px 24px 40px;`
  - **Mobile (390px)**:
    - Standard section: `padding: 80px 20px;`
    - Hero section: `padding: 100px 20px 40px;`
    - Sticky Reel section: `padding: 40px 20px;`

### Grid & Flex Columns
- **Hero**: Flex row on Desktop (split headline / metadata / media container); Stacks vertically on Mobile (`flex-direction: column`).
- **Selected Work**:
  - Desktop: 2-column alternating or stacked high-impact showcase cards with `gap: 20px` to `gap: 40px`.
  - Tablet: 2-column or 1-column responsive grid.
  - Mobile: Single column `width: 100%` stacked cards.
- **Process Cards (4 Steps)**:
  - Desktop: 4 horizontal columns / cards (`grid-template-columns: repeat(4, 1fr)` or flex row with `gap: 24px`).
  - Tablet: 2x2 grid (`grid-template-columns: repeat(2, 1fr)`).
  - Mobile: Single column stack (`gap: 16px`).
- **Services Grid (6 Items)**:
  - Desktop: 2-column or 3-column grid (`grid-template-columns: repeat(3, 1fr)` or `repeat(2, 1fr)` with `gap: 32px`).
  - Tablet: 2-column grid.
  - Mobile: 1-column stack.
- **FAQ Accordion**: Single centered column, `max-width: 900px` or `100%`, items separated by 1px translucent lines (`#ffffff1a`).

---

## 3. Design Tokens & Styling

### Color Palette
Computed color tokens extracted directly from the reference stylesheet:

```css
:root {
  /* Backgrounds */
  --bg-primary: #000000;           /* Pure Black canvas */
  --bg-secondary: #030712;         /* Darkest Charcoal / Surface */
  --bg-card: #0d0f14;              /* Card Background */
  --bg-card-hover: #141721;        /* Card Hover State */
  --bg-elevated: #111827;          /* Modals / Dropdowns */
  
  /* Text Colors */
  --text-primary: #ffffff;         /* Pure White (#fff) */
  --text-secondary: #9ca3af;       /* Zinc / Gray 400 */
  --text-muted: #6b7280;           /* Gray 500 */
  --text-dim: #4b5563;             /* Gray 600 */
  
  /* Accent & Energy Colors (Stream Forge Studios Brand) */
  --accent-electric: #ff334b;      /* Energetic Neon Crimson / Coral Red */
  --accent-glow: rgba(255, 51, 75, 0.25);
  
  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.10);  /* 10% white divider */
  --border-card: rgba(255, 255, 255, 0.15);    /* 15% white border */
  --border-focus: rgba(255, 255, 255, 0.35);   /* Highlighted state */
  
  /* Backdrop Blurs */
  --glass-header: rgba(0, 0, 0, 0.65);
  --glass-blur: 12px;
}
```

### Typography System
The reference site combines clean modern sans-serif typography with technical monospace accents:

1. **Heading Display Font**: `Geist Sans` (weights: 300 Light, 400 Regular, 700 Bold)
   - Used for massive hero statements, section titles, and project names.
   - Letter spacing: `-0.03em` to `-0.01em` (tight cinematic tracking).
   - Line height: `1.0em` to `1.15em`.
2. **Body Copy Font**: `Inter` / `Geist Sans` (weights: 400 Regular, 500 Medium)
   - Clean, neutral legibility for studio descriptions, services, and FAQ answers.
   - Line height: `1.5em` to `1.65em`.
3. **Technical / Monospace Accents**: `Geist Mono` / `Fragment Mono` (weights: 400 Regular, 500 Medium)
   - Used for section labels (`[12]`, `001`, `[EST 2K18]`), metadata tags (`YEAR // 2025`), live clock (`02:04:01`), and category badges.
   - Letter spacing: `0.05em` to `0.1em` uppercase.

### Key Type Scale
- **Display Giant (H1)**: `clamp(2.75rem, 6.5vw, 6.25rem)` / Line height: `1.0`
- **Section Heading (H3)**: `clamp(1.75rem, 3.5vw, 3.25rem)` / Line height: `1.15`
- **Card Title / Service (H4)**: `clamp(1.25rem, 2.2vw, 1.875rem)` / Line height: `1.2`
- **Subsection / Question (H6)**: `1.125rem` to `1.25rem` / Line height: `1.3`
- **Body Regular**: `1rem` (16px) / Line height: `1.6`
- **Mono Meta / Badges**: `0.75rem` to `0.875rem` (12px - 14px) / Uppercase

### Border Radii & Shadows
- **Cards**: `border-radius: 10px` to `12px`
- **Pills / Badges**: `border-radius: 9999px` (Full pill shape)
- **Buttons**: `border-radius: 9999px` or `8px`
- **Shadows**: Subtle ambient dark shadow `0 20px 40px rgba(0, 0, 0, 0.7)`

---

## 4. Fonts Configuration

All typefaces will be loaded via `next/font/google` in `src/app/layout.tsx`:
- `Geist` (Google Font: variable font with Latin character set)
- `Geist_Mono` (Google Font: variable monospace font)
- `Inter` (Google Font: variable font for crisp UI elements)

This ensures zero external layout shift (CLS: 0), preloaded WOFF2 assets, and optimal SSR delivery without external render-blocking scripts.

---

## 5. Media Assets & Placeholders

### Video Placeholders
The template relies extensively on looped, muted, cinematic MP4 video elements for motion impact:
- **Hero Ambient Showcase**: `/public/videos/hero-reel.mp4` (or `/public/videos/placeholder.mp4`)
  - Auto-playing, muted, looping, playsInline background video.
- **Sticky Reel Section**: `/public/videos/sticky-reel.mp4`
  - High-impact widescreen showreel preview.
- **Project Hover Cards (6 items)**:
  - Each project card contains a muted looping preview video revealed smoothly on mouse hover.
- **All video elements** are accompanied by a sharp poster image fallback.

### Image Placeholders
- 6-8 High-resolution dance and social video thumbnails (`/public/images/projects/...`)
- Studio BTS and creator team portrait placeholders (`/public/images/team/...`)
- High-contrast Open Graph preview banner (`/public/images/og-image.jpg`)

### Icons & SVGs
- Clean minimalist Lucide SVG icons:
  - Arrow Up-Right (`ArrowUpRight`) for external and project detail links
  - Plus / Chevron for FAQ accordion toggles
  - Play / Pause indicator for video preview triggers
  - Social icons: Instagram, YouTube, TikTok, Vimeo

---

## 6. Navigation Architecture

### Desktop Header
- **Layout**: Fixed / Sticky at top (`position: sticky; top: 0; z-index: 50;`)
- **Styling**: `backdrop-filter: blur(12px); background-color: rgba(0, 0, 0, 0.75); border-bottom: 1px solid rgba(255, 255, 255, 0.08);`
- **Components**:
  - **Left**: Studio Wordmark `Stream Forge`
  - **Center**: Nav Links `Index`, `Work`, `About`
  - **Right**: Action / CTA link `Contact` with subtle hover glow

### Mobile Navigation Drawer
- **Trigger**: Minimalist `MENU` pill button visible below `810px`.
- **Overlay**: Fullscreen or slide-down drawer with `backdrop-filter: blur(20px); background: #000000;`.
- **Animation**:
  - Menu opens with spring ease (`damping: 25, stiffness: 200`).
  - Navigation links stagger in sequentially with slide-up and fade (`delay: index * 0.08`).
  - Direct studio email, phone number, and social links embedded in the drawer bottom.

---

## 7. Animations & Micro-Interactions

### Viewport Entrance Reveals
- **Trigger**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, amount: 0.15 }}`.
- **Initial State**: `opacity: 0, y: 40px` (or `y: 60px` on heavy headings).
- **Transition**: `duration: 0.7s`, `ease: [0.22, 1, 0.36, 1]` (custom cubic-bezier smooth ease-out).

### Cinematic Text Character & Word Reveals
- Used in Hero headline and About intro:
- Each word or character is wrapped in an inline-block span:
  - Initial: `opacity: 0, filter: blur(8px), y: 20px`
  - Target: `opacity: 1, filter: blur(0px), y: 0px`
  - Stagger delay: `0.04s` per word/character.

### Project Card Hover Interaction
- Normal state: Video opacity `0`, image poster visible, text card overlay visible.
- Hover state:
  - Image scales up subtly (`scale: 1.03`, duration `0.4s`).
  - Looping video fades in (`opacity: 1`, duration `0.3s`).
  - Action badge (`View Project` with `ArrowUpRight`) slides up into focus.

### Interactive FAQ Accordion
- Click toggle expands answer block smoothly using Framer Motion `AnimatePresence` and `height: "auto"`.
- Chevron / Plus icon rotates `180deg` or `45deg`.

### Real-Time Studio Clock
- Located in the footer and mobile menu:
- Displays live California / Studio local time (`HH:mm:ss`) updated each second via `setInterval`.
- Monospace styling with green status indicator dot ("AVAILABLE FOR BOOKINGS").

---

## 8. Scroll Dynamics & Smooth Scroll

- **Smooth Inertia Scrolling**: Integrated via `@studio-freight/lenis` (or `lenis`), providing weighted momentum scrolling that eliminates harsh browser scroll snapping.
- **Sticky Reel Section**:
  - Container uses `position: sticky; top: 80px;` with sticky scroll tracking.
  - Video container expands or remains locked as background text scrolls past.

---

## 9. Responsive Adaptations (Section by Section)

| Section | Desktop (1440px) | Tablet (768px) | Mobile (390px) |
| :--- | :--- | :--- | :--- |
| **Header** | Full nav links + CTA | Compact nav with MENU | Logo + MENU pill |
| **Hero** | 3-line huge headline, split metadata | Scaled headline, stacked metadata | Compact stacked headline, full width video preview |
| **Selected Work** | 2-column alternating grid | 2-column grid | 1-column full-width cards |
| **Sticky Reel** | Full 16:9 cinematic container | 16:9 container with 24px margins | 16:9 container with 20px margins |
| **Process** | 4 horizontal columns (001-004) | 2x2 grid | 1-column cards with divider lines |
| **Services** | 3-column or 2-column cards | 2-column cards | 1-column stacked cards |
| **FAQ** | 900px centered accordion | Full width with 24px padding | Full width with 20px padding |
| **Footer** | 4-column layout + Giant Wordmark | 2-column layout + Giant Wordmark | 1-column stacked + Scaled Wordmark |

---

## 10. Rebranded Content Blueprint (Stream Forge Studios)

All site copy is decoupled into `src/data/siteContent.ts`:
- **Studio Name**: Stream Forge Studios
- **Hero Headline**: `"SCROLL-STOPPING VIDEO. EXPLOSIVE MOVEMENT."`
- **Subline**: *"A premier creative production studio engineering viral short-form reels, brand campaigns, and choreographed dance films."*
- **Stats**: `250+ Videos Produced` • `50+ World-Class Dancers` • `25M+ Combined Views` • `99.4% Client Retention`
- **Process**:
  1. `001 // CONCEPT`: Vision alignment, hook crafting, auditory styling, and moodboard curation.
  2. `002 // CHOREOGRAPHY`: Dynamic motion design, rehearsal pacing, and viral movement blocking.
  3. `003 // SHOOT`: High-frame-rate cinema cameras, precision lighting, and energetic multi-cam coverage.
  4. `004 // EDIT & MASTER`: Fast-cut rhythmic editing, color grade, audio design, and vertical multi-format delivery.
- **6 Featured Projects**:
  1. `RHYTHM OF SILENCE` // Category: Dance Film // Year: 2025 // Client: Red Bull Dance
  2. `NEON VELOCITY` // Category: Brand Campaign // Year: 2025 // Client: Nike Training
  3. `AFTER HOURS GROOVE` // Category: Music Video // Year: 2024 // Client: Def Jam Records
  4. `URBAN CADENCE` // Category: Reel Series // Year: 2024 // Client: Puma Motion
  5. `ECHOES IN MOTION` // Category: Dance Showcase // Year: 2023 // Client: Sony Music
  6. `THE FORGED PULSE` // Category: Brand Film // Year: 2023 // Client: Beats by Dre
- **Team**:
  1. `Marcus Vance` — Creative Director & Co-Founder
  2. `Elena Rostova` — Head of Choreography & Movement
  3. `Kaelen Chen` — Lead Cinematographer & DP
  4. `Maya Brooks` — Senior Post-Production Editor
  5. `Devon Price` — Social Media & Distribution Strategist
- **Testimonials**: 3 quotes from entertainment marketing directors praising speed, visual punch, and viral engagement.

---
*Analysis complete. All design tokens, animations, layouts, and content schemas documented and ready for Phase 3 Build upon user approval.*
