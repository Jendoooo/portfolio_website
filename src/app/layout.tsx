import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olajideayeola.vercel.app"),
  title: {
    default: "Olajide Ayeola | Data Engineer, Analytics Architect & Full-Stack Developer",
    template: "%s | Olajide Ayeola",
  },
  description:
    "Portfolio of Olajide Ayeola, a Data Engineer and Analytics Architect based in the UK. Specializing in ETL pipelines, Python data engines, Power BI dashboards, and full-stack React/Next.js platforms for operations analytics.",
  keywords: [
    "Olajide Ayeola",
    "Data Engineer portfolio",
    "Analytics Architect",
    "Data Engineering UK",
    "Python Developer",
    "Power BI dashboards",
    "Next.js Developer",
    "Chemical Engineer to Data Engineer",
    "Operations Analytics",
    "Lagos to UK Data Engineer"
  ],
  authors: [{ name: "Olajide Ayeola", url: "https://olajideayeola.vercel.app" }],
  creator: "Olajide Ayeola",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://olajideayeola.vercel.app",
    title: "Olajide Ayeola | Data Engineer & Analytics Architect",
    description:
      "Explore the portfolio of Olajide Ayeola: ETL pipelines, interactive dashboards, and full-stack data platforms transforming engineering operations.",
    siteName: "Olajide Ayeola Portfolio",
    images: [
      {
        url: "/photos/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Olajide Ayeola - Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olajide Ayeola | Data Engineer & Analytics Architect",
    description: "ETL pipelines, Python data engines, and full-stack platforms.",
    images: ["/photos/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://olajideayeola.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
