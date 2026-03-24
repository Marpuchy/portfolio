import type { Metadata, Viewport } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { getSiteContent } from "@/data/site-content";
import { getRequestLocale } from "@/lib/request-locale";

import "./globals.css";

const siteUrl = "https://marcibanez.dev";
const socialImage = "/og-image.svg";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const siteContent = getSiteContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: siteContent.copy.metadata.siteTitle,
    description: siteContent.copy.metadata.siteDescription,
    applicationName: siteContent.copy.metadata.siteName,
    authors: [{ name: siteContent.profile.name }],
    creator: siteContent.profile.name,
    publisher: siteContent.profile.name,
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
      siteName: siteContent.copy.metadata.siteName,
      title: siteContent.copy.metadata.siteTitle,
      description: siteContent.copy.metadata.siteDescription,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: siteContent.copy.metadata.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteContent.copy.metadata.siteTitle,
      description: siteContent.copy.metadata.siteDescription,
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080d",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale}>
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
