import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bastion | Portfolio Data Platform for VC & PE",
  description:
    "Bastion gives VC and PE teams a single source of truth for portfolio company metrics — powered by AI, delivered where you already work: Excel.",
  keywords: [
    "portfolio monitoring",
    "venture capital",
    "private equity",
    "portfolio data",
    "Excel add-in",
    "AI document processing",
  ],
  openGraph: {
    title: "Bastion | Portfolio Data Platform for VC & PE",
    description:
      "Your portfolio data, finally in one place. Powered by AI, delivered in Excel.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A5F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
