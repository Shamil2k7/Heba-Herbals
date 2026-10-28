import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/data/product";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#EDE5D6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.meta.canonicalDomain),
  title: {
    default: brandConfig.meta.siteTitle,
    template: "%s | Heba Herbals",
  },
  description: brandConfig.meta.siteDescription,
  authors: [{ name: "Heba Herbals" }],
  creator: "Heba Herbals",
  publisher: "Heba Herbals",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: brandConfig.meta.siteTitle,
    description: brandConfig.meta.siteDescription,
    url: brandConfig.meta.canonicalDomain,
    siteName: "Heba Herbals",
    images: [
      {
        url: brandConfig.meta.ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Heba Herbals Butter Bliss All-Natural Lip Elixir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.meta.siteTitle,
    description: brandConfig.meta.siteDescription,
    images: [brandConfig.meta.ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans bg-ivory text-charcoal min-h-screen selection:bg-cream-200 selection:text-forest antialiased">
        {children}
      </body>
    </html>
  );
}
