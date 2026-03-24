import type { Metadata, Viewport } from "next";

import { SiteFrame } from "@/components/layout/site-frame";

import "./globals.css";

const siteName = "Marc Ib\\u00e1\\u00f1ez Portfolio";
const siteTitle = "Marc Ib\\u00e1\\u00f1ez | Full-Stack Web Developer Portfolio";
const siteDescription =
  "Professional portfolio of Marc Ib\\u00e1\\u00f1ez, showcasing advanced programming, modern web technologies, scalable architectures, and full-stack expertise.";
const siteUrl = "https://marcibanez.dev";
const socialImage = "/og-image.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Marc Ib\\u00e1\\u00f1ez" }],
  creator: "Marc Ib\\u00e1\\u00f1ez",
  publisher: "Marc Ib\\u00e1\\u00f1ez",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Marc Ib\\u00e1\\u00f1ez professional web developer portfolio preview.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
