import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { outfit, displaySerif } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LOVA Magazine | Discover Businesses You’ll Love",
    template: "%s | LOVA Magazine",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: "LOVA Magazine | Discover Businesses You’ll Love",
    description: siteConfig.description,
    images: [
      {
        url: "/images/editorial-fashion-boutique.jpg",
        width: 1600,
        height: 1067,
        alt: "LOVA Magazine — editorial discovery publication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOVA Magazine | Discover Businesses You’ll Love",
    description: siteConfig.description,
    images: ["/images/editorial-fashion-boutique.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${displaySerif.variable} ${outfit.className} antialiased`}
      >
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
