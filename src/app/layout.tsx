import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Olajide Ayeola — Data Engineer & Analyst",
  description:
    "Portfolio of Olajide Ayeola — Chemical Engineer turned Data Professional. ETL pipelines, Power BI dashboards, full-stack applications, and energy sector expertise.",
  keywords: [
    "Olajide Ayeola",
    "Data Engineer",
    "Python",
    "Power BI",
    "Next.js",
    "Chemical Engineering",
    "Operations Analytics",
  ],
  authors: [{ name: "Olajide Ayeola" }],
  openGraph: {
    title: "Olajide Ayeola — Data Engineer & Analyst",
    description:
      "ETL pipelines, Power BI dashboards, full-stack applications, and energy sector expertise.",
    url: "https://olajideayeola.vercel.app",
    siteName: "Olajide Ayeola Portfolio",
    type: "website",
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
