import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://roundnet-worlds-archive.vercel.app",
  ),
  title: {
    default: "Roundnet Worlds — The Podium Archive",
    template: "%s — Roundnet Worlds",
  },
  description:
    "Every medal, podium nation, player, team, and championship squad from the Roundnet World Championship.",
  applicationName: "Roundnet Worlds",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Roundnet Worlds — The Podium Archive",
    description:
      "Every world title, podium nation, player, and championship squad from roundnet’s biggest stage.",
    images: [
      {
        url: "/images/worlds-trophy.jpg",
        width: 1920,
        height: 1080,
        alt: "The Roundnet World Championship trophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roundnet Worlds — The Podium Archive",
    description:
      "Every world title, podium nation, player, and championship squad.",
    images: ["/images/worlds-trophy.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
