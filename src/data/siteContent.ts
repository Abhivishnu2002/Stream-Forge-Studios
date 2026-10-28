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
  tagline: "Director Cinematographer",
  description:
    "A cinematic multi-page portfolio crafted for high-performance visual storytelling. Built to showcase motion, atmosphere, and precision through immersive layouts, refined typography, and a dark, minimal visual system.",
  url: "https://streamforgestudios.com",
  ogImage: "/images/og-image.jpg",
  location: "CALIFORNIA, USA",
  timezone: "America/Los_Angeles",
  established: "EST 2K18",
  contact: {
    email: "hi@streamforgestudios.com",
    inquiries: "hi@streamforgestudios.com",
    phone: "+1 (231) 879 0811",
    address: "California, United States",
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
  eyebrow: "DIRECTOR",
  headlineWords: ["FILMS", "•", "COMMERCIALS", "•", "NARRATIVE"],
  subline:
    "Filmmaker and Director Creating Cinematic Stories for Brands and Artists",
  ctaText: "View our work",
  ctaSecondary: "Get in touch",
  videoUrl: "/videos/OkFJ1jaWFt0bE4PnFt7S2IOvA.mp4",
  videoPoster: "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
  badgeText: "[EST 2K18]",
};

export const ABOUT_CONTENT = {
  badge: "Behind the work",
  headline:
    "Stream Forge Studios is a California-based cinematography and directing studio. Working as cinematographer, director, or in a combined role depending on the project, bringing a distinct visual signature to each one, with story-building at the heart of the work.",
  extendedBio:
    "Moving between directing and cinematography, sometimes in a hybrid role, bringing a strong visual signature to our work. Rooted in world-building, our films create atmospheres that feel lived-in and emotionally grounded. Collaborating with brands such as The North Face, Jordan, UFC, Black Diamond, and SAQ, bringing the same care to story and image in commercial projects.",
  btsRollLabel: "ROLL // 04.2",
  btsImages: [
    "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
    "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
  ],
};

export const STICKY_REEL_CONTENT = {
  eyebrow: "2K25 SHOWREEL",
  headline: "THE HYPE IS REEL",
  subline:
    "Our work is best experienced in motion. Don’t forget to put on your headphones.",
  videoUrl: "/videos/As8Zelyphu18fIUuYQNJdR5f2o.mp4",
  poster: "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "001",
    name: "Studio Photography",
    title: "Studio Photography",
    description:
      "Controlled studio sessions focused on form, surfaces and details. Ideal for clean visuals, catalogs and brand-focused content.",
  },
  {
    step: "002",
    name: "Location Shooting",
    title: "Location Shooting",
    description:
      "On-location photography using natural light and environments. Designed to place the subject in a context that enhances its character.",
  },
  {
    step: "003",
    name: "Detail & Design",
    title: "Detail & Design",
    description:
      "Close-up imagery highlighting materials, lines and craftsmanship. Perfect for emphasizing design language and premium details.",
  },
  {
    step: "004",
    name: "Post-Production",
    title: "Post-Production",
    description:
      "Image selection, retouching and color consistency. Delivering a clean and cohesive final visual set.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "commercials",
    number: "01",
    title: "TV & Online Commercials",
    subtitle: "Broadcast & Digital Campaigns",
    description:
      "High-impact advertising campaigns designed to grab attention and drive action across broadcast and digital.",
  },
  {
    id: "brand-films",
    number: "02",
    title: "Brand Films",
    subtitle: "Cinematic Narratives",
    description:
      "Deep-dive narratives that communicate your company's ethos, history, and vision with cinematic flair.",
  },
  {
    id: "music-videos",
    number: "03",
    title: "Music Videos",
    subtitle: "Visual Accompaniment",
    description:
      "Visually striking accompaniments to audio tracks, tailored to the artist's unique aesthetic.",
  },
  {
    id: "documentaries",
    number: "04",
    title: "Documentaries",
    subtitle: "Non-Fiction Storytelling",
    description:
      "Compelling short-form and feature-length non-fiction storytelling with a premium look.",
  },
  {
    id: "live-performance",
    number: "05",
    title: "Live Performance",
    subtitle: "Multi-Cam Coverage",
    description:
      "Multi-camera coverage of events, concerts, and exclusive performances captured in high fidelity.",
  },
  {
    id: "social-content",
    number: "06",
    title: "Social Content Packs",
    subtitle: "Vertical & Multi-Ratio Deliverables",
    description:
      "Vertical cuts, teasers, and multi-ratio deliverables optimized specifically for social algorithms.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "silent-craft",
    title: "Silent Craft",
    category: "Cinematography",
    year: "2021",
    client: "Roleex",
    role: "Cinematography",
    tagline: "A refined visual examination of precision horology and metallic textures.",
    description:
      "A slow-burn visual exploration highlighting the dedication behind the craft. Shot on location using exclusively natural light and practical fixtures, emphasizing precision textures, materials, and form.",
    video: "/videos/XxUhRfuareWJNX7PM6ULwREN3ms.mp4",
    poster: "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    featured: true,
    duration: "02:15",
    deliverables: ["4K Cinema Master", "Color Grade", "Macro Stills"],
    gallery: [
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    ],
  },
  {
    slug: "urban-shadow",
    title: "Urban Shadow",
    category: "Editor",
    year: "2023",
    client: "Nike",
    role: "Editor",
    tagline: "Kinetic movement and atmospheric contrast across metropolitan nightscapes.",
    description:
      "Capturing raw explosive agility on midnight asphalt. High-speed cinema rigs and neon atmospheric lighting in an empty multi-story garage, cutting to the rhythm of relentless urban motion.",
    video: "/videos/DRL3Xn8OSFOp1VRX0y46WTzfXY.mp4",
    poster: "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
    featured: true,
    duration: "01:30",
    deliverables: ["Commercial Master", "Cutdowns (30s / 15s)", "Vertical Reels"],
    gallery: [
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    ],
  },
  {
    slug: "echoes",
    title: "Echoes",
    category: "Director of Photography",
    year: "2024",
    client: "The Weekend",
    role: "Director of Photography",
    tagline: "Neon silhouettes, smoke textures, and surreal melodic progression.",
    description:
      "Moody atmosphere, neon undertones, and evocative visual rhythm. A single-take illusion music video where camera movement was synchronized to the baseline, achieving hypnotic visual fluidity.",
    video: "/videos/4favH3fVwvyqtWwdqDeb15c8C5c.mp4",
    poster: "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    featured: true,
    duration: "03:45",
    deliverables: ["Music Video Master", "Director's Cut", "Behind The Scenes"],
    gallery: [
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
      "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    ],
  },
  {
    slug: "midnight-run",
    title: "Midnight Run",
    category: "Cinematography",
    year: "2025",
    client: "Porsche",
    role: "Cinematography",
    tagline: "A high-octane night drive through the neon-lit streets of Tokyo.",
    description:
      "A high-octane night drive through the neon-lit streets of Tokyo. We aimed to capture the raw power and sleek design of the new Porsche in its natural nocturnal habitat with sweeping camera movements.",
    video: "/videos/gLSHobDSGN5FaMzTaFr5cNtEL4.mp4",
    poster: "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
    featured: true,
    duration: "02:00",
    deliverables: ["Cinema 4K Film", "Social Campaign Pack", "Stills Collection"],
    gallery: [
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
      "/images/azVf3RceAJJ0VpdemBlApwEsbEc.avif",
    ],
  },
  {
    slug: "neon-pulse",
    title: "Neon Pulse",
    category: "Director",
    year: "2025",
    client: "Sony Music",
    role: "Director",
    tagline: "High-voltage kinetic performance capturing electric movement and sound.",
    description:
      "High energy visual production capturing electric motion. Optical studio reflections, saturated color gels, and synchronized performer blocking elevate this music-driven spectacle.",
    video: "/videos/BOC1goZR2pHAjmVZbK1gxxX2Yi0.mp4",
    poster: "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
    featured: true,
    duration: "03:15",
    deliverables: ["Music Video Master", "Vertical Teaser Pack", "Key Art"],
    gallery: [
      "/images/iMu6XV21ueq7vFpzWyeBtiKqJM.avif",
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
      "/images/O11o3SGA1T3SRr4kAURlQxmhBQ.avif",
    ],
  },
  {
    slug: "the-artisan",
    title: "The Artisan",
    category: "Cinematography",
    year: "2025",
    client: "Macallan",
    role: "Cinematography",
    tagline: "A slow-burn documentary-style piece highlighting the dedication behind the craft.",
    description:
      "A slow-burn documentary-style piece highlighting the dedication behind the craft. Shot on location in Scotland using exclusively natural light and practical fixtures, letting textures and silence tell the story.",
    video: "/videos/HlIHQt6oUlgSpcbkmg21IEEF0.mp4",
    poster: "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
    featured: true,
    duration: "04:10",
    deliverables: ["Documentary Master", "Cinematic Trailer", "Photo Essay"],
    gallery: [
      "/images/6ySR7v9DPy8ERkSdr1favg4bCaY.avif",
      "/images/UM1vOsnrNMG8r5wJARx2PaBck.avif",
      "/images/pbMbyMBRvjkhCG0yBQuKLkbW2OA.avif",
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the typical budget range for a project?",
    answer:
      "Budgets typically vary based on scope, location, and production scale. We provide transparent line-item estimates tailored to project requirements, from indie passion pieces to national commercial campaigns.",
  },
  {
    question: "How long does the process take from brief to final video?",
    answer:
      "Turnaround varies from 2 weeks for fast-turnaround commercial deliverables to 6-8 weeks for complex narrative films requiring extensive post-production, color grading, and sound design.",
  },
  {
    question: "Do you provide ideas and scripts, or just production execution?",
    answer:
      "We operate both as a full-service creative partner providing treatments, concepting, and scriptwriting, or as a dedicated production unit executing your pre-existing creative brief.",
  },
  {
    question: "In what format will we receive the final files?",
    answer:
      "Master deliverables are provided in uncompressed 4K ProRes 422HQ or 4444, alongside web-ready H.264/H.265 files in 16:9, 9:16 vertical, and custom aspect ratios.",
  },
  {
    question: "Do you collaborate with other agencies as a production partner?",
    answer:
      "Yes, we frequently partner with design studios, advertising agencies, and internal creative teams as a specialized cinematography, directing, and post-production partner.",
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
          "If you have questions or concerns about our privacy practices, please contact us at hi@streamforgestudios.com.",
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
          "For any questions regarding these terms, please contact us at hi@streamforgestudios.com.",
      },
    ],
  },
};
