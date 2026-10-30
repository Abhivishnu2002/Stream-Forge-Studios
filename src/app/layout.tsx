import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { SITE_METADATA } from "@/data/siteContent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_METADATA.name} | ${SITE_METADATA.tagline}`,
    template: `%s | ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(SITE_METADATA.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.url,
    title: `${SITE_METADATA.name} | ${SITE_METADATA.tagline}`,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.name,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_METADATA.name} - International Live Streams, Creator Academy & Idol Shaping`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_METADATA.name} | ${SITE_METADATA.tagline}`,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
    shortcut: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full bg-black text-white antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-black text-white selection:bg-[#ff334b] selection:text-white">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
