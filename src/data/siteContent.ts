export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tagline: string;
  description: string;
  video: string;
  poster: string;
  featured: boolean;
  duration?: string;
  deliverables?: string[];
  gallery?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_METADATA = {
  name: "Stream Forge Studios",
  tagline: "Live Streams • Content Creation • Shaping Idols",
  description:
    "Stream Forge Studios is a Bangalore-based creative powerhouse delivering high-performance live streams to international platforms, teaching elite content creation, and shaping tomorrow's digital idols.",
  url: "https://streamforgestudios.com",
  ogImage: "/images/og-image.jpg",
  location: "BANGALORE INDIA",
  timezone: "Asia/Kolkata",
  established: "EST 2K26",
  contact: {
    email: "info@streamforgestudios.com",
    inquiries: "info@streamforgestudios.com",
    phone: "+91 9180147107",
    address: "Bangalore, India",
  },
  socials: [
    { name: "Instagram", url: "#", handle: "@streamforgestudios" },
    { name: "Vimeo", url: "#", handle: "streamforgestudios" },
    { name: "Linkedin", url: "#", handle: "stream-forge-studios" },
  ],
};

export const NAVIGATION_LINKS = [
  { name: "Index", href: "/" },
  { name: "WORKS", href: "/works" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export const HERO_CONTENT = {
  eyebrow: "STREAM FORGE STUDIOS",
  headlineWords: ["LIVE STREAMS", "•", "CREATOR LAB", "•", "SHAPING IDOLS"],
  subline:
    "Broadcasting live to premier international platforms, teaching elite content creation, and shaping next-generation idols.",
  ctaText: "View our work",
  ctaSecondary: "Get in touch",
  videoUrl: "/videos/OkFJ1jaWFt0bE4PnFt7S2IOvA.mp4",
  videoPoster: "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
  badgeText: "[EST 2K26]",
};

export const ABOUT_CONTENT = {
  badge: "About Stream Forge",
  headline:
    "Stream Forge Studios is a Bangalore-based creative powerhouse producing high-impact live streams to international platforms, teaching modern content creation, and shaping tomorrow's digital idols.",
  extendedBio:
    "From multi-camera, low-latency broadcasting across Twitch, YouTube Live, and international platforms, to intensive hands-on creator masterclasses and full-spectrum idol incubation, we bridge engineering precision with charismatic star power. We empower creators to dominate global algorithms and craft magnetic idol personas that captivate worldwide fandoms.",
  btsRollLabel: "ROLL // 04.2",
  btsImages: [
    "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
    "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
  ],
};

export const STICKY_REEL_CONTENT = {
  eyebrow: "2K26 SHOWREEL",
  headline: "THE FUTURE IS LIVE",
  subline:
    "High-octane international streams, elite creator coaching, and idol incubations in motion.",
  videoUrl: "/videos/As8Zelyphu18fIUuYQNJdR5f2o.mp4",
  poster: "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "001",
    name: "Global Live Streams",
    title: "Global Live Streams",
    description:
      "Ultra-low latency, multi-platform simulcasting engineered for Twitch, YouTube, Kick, and international networks with real-time interactive fidelity.",
  },
  {
    step: "002",
    name: "Creator Academy",
    title: "Creator Academy",
    description:
      "Intensive masterclasses covering camera charisma, high-retention storytelling, algorithmic strategy, and professional studio production workflows.",
  },
  {
    step: "003",
    name: "Shaping The Idols",
    title: "Shaping The Idols",
    description:
      "Holistic talent shaping: vocal & stage poise, visual identity, media training, and signature aesthetic direction to forge magnetic digital personas.",
  },
  {
    step: "004",
    name: "Fandom Scaling",
    title: "Fandom Scaling",
    description:
      "Cross-border distribution, brand sponsorships, and multi-channel community management that turn live viewership into enduring global fanbases.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "international-livestreams",
    number: "01",
    title: "International Live Streaming",
    subtitle: "Twitch, YouTube, Kick & Global CDNs",
    description:
      "Turnkey broadcast engineering and multi-cam live production connecting creators and esports athletes to international platforms in real-time.",
  },
  {
    id: "creator-academy",
    number: "02",
    title: "Content Creation Masterclasses",
    subtitle: "Storytelling, Production & Growth",
    description:
      "Comprehensive training programs teaching creators high-retention scripting, cinematic shooting, rapid editing workflows, and channel monetization.",
  },
  {
    id: "shaping-idols",
    number: "03",
    title: "Idol Incubation & Persona Shaping",
    subtitle: "Stage Presence, Image & Aesthetics",
    description:
      "End-to-end talent incubation: camera magnetism, vocal choreography, fashion styling, media training, and digital persona development.",
  },
  {
    id: "interactive-stream-tech",
    number: "04",
    title: "Interactive Stream Tech & Overlays",
    subtitle: "Real-Time Visuals & Studio Automation",
    description:
      "Custom stream overlays, dynamic alert widgets, gamified chat integrations, and hardware-accelerated studio automation for top-tier creators.",
  },
  {
    id: "creator-bootcamps",
    number: "05",
    title: "Creator Bootcamps & Studio Mentorship",
    subtitle: "Hands-On Studio Training in Bangalore",
    description:
      "In-person studio intensives covering professional cinema rigs, acoustics, color grading, and live switching in our Bangalore facility.",
  },
  {
    id: "idol-showcase-tours",
    number: "06",
    title: "Idol Debut Showcases & Global Tours",
    subtitle: "Live Concerts & Virtual Performances",
    description:
      "High-production live showcases, fan-meeting streams, and hybrid virtual performances launching idols into international fandoms.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "silent-craft",
    title: "Nexus International Stream",
    category: "Global Live Stream",
    year: "2026",
    client: "Twitch / ESL",
    role: "Broadcast Production",
    tagline: "Multi-platform high-bitrate live broadcast streaming across international networks.",
    description:
      "A high-octane live production simulcasting across Twitch, YouTube, and international platforms. Featuring bespoke dynamic overlays, multi-cam live camera switching, and seamless real-time audience engagement.",
    video: "/videos/XxUhRfuareWJNX7PM6ULwREN3ms.mp4",
    poster: "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    featured: true,
    duration: "02:15",
    deliverables: ["Multi-Platform Stream", "Dynamic HUD Overlays", "Live Master VOD"],
    gallery: [
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    ],
  },
  {
    slug: "urban-shadow",
    title: "Creator Blueprint Series",
    category: "Creator Academy",
    year: "2026",
    client: "NextGen Creators Lab",
    role: "Creator Mentorship",
    tagline: "Teaching high-impact storytelling, dynamic shooting, and viral content architecture.",
    description:
      "An intensive masterclass series teaching modern video production, camera presence, dynamic editing, and retention architecture. Over 200 aspiring creators trained in studio lighting, acoustics, and content monetization.",
    video: "/videos/DRL3Xn8OSFOp1VRX0y46WTzfXY.mp4",
    poster: "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
    featured: true,
    duration: "01:30",
    deliverables: ["Workshop Curriculum", "Editing Modules", "Studio Masterclasses"],
    gallery: [
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    ],
  },
  {
    slug: "echoes",
    title: "Aura — Idol Debut Showcase",
    category: "Idol Shaping",
    year: "2026",
    client: "Forge Idol Collective",
    role: "Idol Incubation & Direction",
    tagline: "Sculpting visual identity, stage poise, and magnetic charisma for a breakthrough digital idol.",
    description:
      "Complete talent incubation and debut showcase for a rising digital idol. Encompassing vocal poise, high-fashion aesthetic direction, camera coaching, and a live broadcast debut watched by fans across 14 countries.",
    video: "/videos/4favH3fVwvyqtWwdqDeb15c8C5c.mp4",
    poster: "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    featured: true,
    duration: "03:45",
    deliverables: ["Debut Showcase Broadcast", "Idol Persona Bible", "Live Performance Direction"],
    gallery: [
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
      "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    ],
  },
  {
    slug: "midnight-run",
    title: "Cross-Border Tokyo Live",
    category: "International Stream",
    year: "2026",
    client: "Global Creator Tour",
    role: "Remote Broadcast Engineer",
    tagline: "Real-time multi-platform live streaming directly from Tokyo to global digital platforms.",
    description:
      "A continuous multi-hour international live broadcast navigating Tokyo's nightlife with redundant cellular bonding and cloud-switched studio overlays. Delivering pristine 1080p60 fidelity with zero frame drops.",
    video: "/videos/gLSHobDSGN5FaMzTaFr5cNtEL4.mp4",
    poster: "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
    featured: true,
    duration: "02:00",
    deliverables: ["Cellular Bonded Stream", "Cloud Switching Stack", "Live Highlights"],
    gallery: [
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    ],
  },
  {
    slug: "neon-pulse",
    title: "Starforge Idol Performance",
    category: "Idol Shaping",
    year: "2026",
    client: "V-Idol Worldwide",
    role: "Performance & Persona Coach",
    tagline: "High-voltage choreography, charisma coaching, and persona styling for international talent.",
    description:
      "Comprehensive performance training and image sculpting for a premier digital idol group. From synchronized dance blocking to live chat engagement and media interaction protocols, creating an unforgettable stage presence.",
    video: "/videos/BOC1goZR2pHAjmVZbK1gxxX2Yi0.mp4",
    poster: "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
    featured: true,
    duration: "03:15",
    deliverables: ["Live Stage Performance", "Media Etiquette Training", "Debut Concert Stream"],
    gallery: [
      "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
    ],
  },
  {
    slug: "the-artisan",
    title: "The Creator's Blueprint",
    category: "Creator Mentorship",
    year: "2026",
    client: "Digital Creators Guild",
    role: "Masterclass Director",
    tagline: "An in-depth documentary-style masterclass revealing elite production workflows.",
    description:
      "An advanced course for established creators transitioning to professional cinema workflows, lighting design, sound engineering, and multi-platform distribution systems.",
    video: "/videos/HlIHQt6oUlgSpcbkmg21IEEF0.mp4",
    poster: "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    featured: true,
    duration: "04:10",
    deliverables: ["Masterclass Series", "Production Workflows", "Cinematic VODs"],
    gallery: [
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Which international platforms do you live stream to?",
    answer:
      "We broadcast simultaneously to major international platforms including Twitch, YouTube Live, Kick, TikTok Live, AfreecaTV, Bilibili, and custom RTMP/SRT destinations worldwide with ultra-low latency and pristine bitrate fidelity.",
  },
  {
    question: "What does your content creation training cover?",
    answer:
      "Our creator curriculum covers everything from camera mastery, studio lighting, and audio engineering to high-retention scripting, dynamic video editing, algorithmic distribution, and audience monetization.",
  },
  {
    question: "What is involved in 'Shaping the Idols'?",
    answer:
      "Idol shaping is our talent incubation pipeline. We develop rising stars and digital idols from the ground up—covering stage presence, vocal poise, camera charisma, media etiquette, aesthetic styling, and personal brand strategy.",
  },
  {
    question: "Can creators and brands book your Bangalore studio for live streams?",
    answer:
      "Yes. Our Bangalore studio is equipped with multi-cam cinema switchers, fiber-optic redundant internet lines, professional acoustics, and broadcast-grade lighting for private or global broadcasts.",
  },
  {
    question: "Do you offer one-on-one mentorship for aspiring creators and idols?",
    answer:
      "Absolutely. We run both structured group cohorts and bespoke 1-on-1 intensive mentorship programs tailored specifically to individual career goals and talent trajectories.",
  },
];

export const LEGAL_TERMS = {
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "July 2026",
    sections: [
      {
        heading: "1. Introduction",
        content:
          "Stream Forge Studios ('we', 'our', or 'us') respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, and protect information when you visit our website.",
      },
      {
        heading: "2. Information We Collect",
        content:
          "We may collect personal information such as your name, email address, phone number, and any details you provide when you fill out contact forms or communicate with us directly.",
      },
      {
        heading: "3. How We Use Your Information",
        content:
          "We use information to provide, maintain, and improve our services, communicate with you, respond to your inquiries, and fulfill contractual agreements.",
      },
      {
        heading: "4. Cookies and Analytics",
        content:
          "We may use cookies and similar technologies to collect information about your browsing activities over time and across different websites following your use of our services.",
      },
      {
        heading: "5. Contact Us",
        content:
          "If you have questions or concerns about our privacy practices, please contact us at info@streamforgestudios.com.",
      },
    ],
  },
  termsOfService: {
    title: "Terms of Service",
    lastUpdated: "July 2026",
    sections: [
      {
        heading: "1. Introduction",
        content:
          "These Terms of Service govern your access to and use of Stream Forge Studios website and services. By accessing or using the site, you agree to be bound by these terms.",
      },
      {
        heading: "2. Intellectual Property Rights",
        content:
          "All video content, cinematography, imagery, brand marks, and layout designs displayed on this website are the intellectual property of Stream Forge Studios or its respective brand clients.",
      },
      {
        heading: "3. User Conduct",
        content:
          "You agree not to use the website for any unlawful purpose or in any manner that could damage, disable, or impair the site's functionality.",
      },
      {
        heading: "4. Limitation of Liability",
        content:
          "In no event shall Stream Forge Studios or its directors be liable for any indirect, incidental, special, or consequential damages arising out of your use of the site.",
      },
      {
        heading: "5. Contact Us",
        content:
          "For any questions regarding these terms, please contact us at info@streamforgestudios.com.",
      },
    ],
  },
};
