# Stream Forge Studios — Production Website Replica

A pixel-accurate, behavior-accurate replica of the cinematic Framer portfolio template, fully rebranded for **Stream Forge Studios** — a high-energy creative production studio producing social media video content, commercial campaigns, and choreographed dance entertainment.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native inline theme tokens
- **Animations**: [Motion](https://motion.dev/) / Framer Motion
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (Inertia momentum scrolling)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: Sharp & Next.js Image Component
- **Typography**: `Geist`, `Geist Mono`, and `Inter` via `next/font/google`

---

## 🚀 Quick Start & Setup

### 1. Prerequisites
- **Node.js**: v20+ or v22 LTS (Active LTS recommended)
- **NPM**: v10+

### 2. Installation
```bash
# Clone or navigate to the repository
cd "Stream Forge Website"

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Lint & Typecheck
```bash
npm run lint
```

---

## 📂 Project Architecture

```
├── docs/
│   └── analysis.md              # Deep structural & animation analysis of reference template
├── public/
│   ├── images/
│   │   ├── projects/            # Project posters (16:9 / 4K)
│   │   ├── team/                # Studio team portraits
│   │   └── testimonials/        # Client avatar icons
│   └── videos/
│       ├── hero-reel.mp4        # Hero background ambient reel
│       ├── sticky-reel.mp4      # Pinned showreel video
│       └── placeholder.mp4      # Project card hover video preview
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global HTML, fonts, metadata, Header, Footer & Lenis
│   │   ├── globals.css          # Design tokens, dark mode base, scrollbars
│   │   ├── page.tsx             # Home page (all 9 sections assembled in sequence)
│   │   ├── works/
│   │   │   ├── page.tsx         # Filterable portfolio archive
│   │   │   └── [slug]/page.tsx  # Dynamic project case study detail page
│   │   ├── about/page.tsx       # Studio story, movement philosophy, creator team
│   │   ├── contact/page.tsx     # Inquiry booking form & direct details
│   │   ├── legal/
│   │   │   ├── privacy-policy/page.tsx
│   │   │   └── terms-of-service/page.tsx
│   │   └── not-found.tsx        # Branded 404 page
│   ├── components/
│   │   ├── layout/              # Header, Footer, Logo, SmoothScroll
│   │   ├── sections/            # Hero, About, Work, StickyReel, Process, Services, Team, Testimonials, Faq
│   │   └── ui/                  # BlurText, ProjectCard, Accordion
│   ├── data/
│   │   └── siteContent.ts       # Central source of truth for ALL site copy & metadata
│   └── lib/
│       └── utils.ts             # Tailwind class merging (clsx + twMerge)
```

---

## 🎨 Where to Edit Site Content (Decoupled Source of Truth)

All site copy, project case studies, creator roles, team members, client quotes, contact information, and video paths are centralized in:

📂 **`src/data/siteContent.ts`**

### 1. Studio Metadata & Contact Info
Modify `SITE_METADATA`:
- `name`: Studio title
- `tagline`: Header eyebrow
- `contact.email`, `contact.phone`, `contact.address`: Studio direct details
- `socials`: Instagram, YouTube, TikTok, Vimeo URLs and handles

### 2. Hero & Narrative Copy
Modify `HERO_CONTENT` and `ABOUT_CONTENT`:
- `headlineWords`: Animated blur headline words
- `subline`: Intro paragraph
- `extendedBio` & `secondaryText`: Studio story on movement & filmmaking

### 3. Projects & Work Showcase
Modify the `PROJECTS` array. Each project object contains:
- `slug`: Route URL (e.g. `/works/rhythm-of-silence`)
- `title`, `client`, `role`, `year`, `category`
- `tagline` & `description`: Narrative case study overview
- `video`: Looping hover preview video path (e.g. `/videos/placeholder.mp4`)
- `poster`: Fallback high-res image poster
- `deliverables`: Array of deliverables tags
- `gallery`: Array of behind-the-scenes production stills

### 4. Process Steps (Concept → Publish)
Modify `PROCESS_STEPS`:
- Customize the 5 stages (`001 Concept`, `002 Choreography`, `003 Shoot`, `004 Edit`, `005 Publish`).

### 5. Services & Capabilities
Modify `SERVICES`:
- 6 core capability cards with descriptions and included deliverables.

### 6. Team & Testimonials
Modify `TEAM_MEMBERS` and `TESTIMONIALS` with real names, roles, bios, and portrait images.

### 7. FAQ Accordion
Modify `FAQ_ITEMS` with your custom questions and answers.

---

## 🎬 Replacing Video & Image Placeholders

1. **Reels & Video**:
   Drop your `.mp4` video files into `/public/videos/`:
   - Replace `hero-reel.mp4` with your main studio showreel cut.
   - Replace `sticky-reel.mp4` with your widescreen showcase.
   - For individual project hover clips, place `.mp4` files in `/public/videos/` and update `video` paths in `src/data/siteContent.ts`.
2. **Images**:
   Drop photos into `/public/images/projects/`, `/public/images/team/`, or `/public/images/testimonials/` and update the respective paths in `src/data/siteContent.ts`.

---

## 🔍 Differences & Adaptations from Reference Template

1. **Rebranding**:
   - Every trace of "Cassian Norrell" and automotive photography has been replaced with **Stream Forge Studios**, centered on social video and dance entertainment.
2. **CMS Layer**:
   - The reference template used Framer's proprietary cloud CMS. This replica uses typed TypeScript static data in `src/data/siteContent.ts` with Next.js App Router `generateStaticParams()`, providing instant page loads, zero runtime database latency, and static HTML prerendering.
3. **Form Handling**:
   - The contact page includes an interactive client inquiry form with input validation and a feedback confirmation state.
4. **Performance & Clean Code**:
   - Vanilla Tailwind CSS and native CSS variables are used without extraneous third-party script tags or external Framer runtime overhead.
