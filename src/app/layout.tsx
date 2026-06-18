import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Azure Linux Training, DevOps & Startup Cloud Support`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.legalName,
    title: `${site.legalName} | Azure Linux Training & DevOps Cloud Courses`,
    description: site.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: site.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.legalName,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/tbesh logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/tbesh logo.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className={`${dmSans.className} min-h-screen flex flex-col text-[var(--color-text)] antialiased`}>
        <OrganizationJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
