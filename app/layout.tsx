import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arawal.dev"),
  title: "Arawal Shukla | Personal Portfolio",
  description:
    "A quiet editorial portfolio for Arawal Shukla, CSE Sophomore at VIT Chennai, exploring AI, machine learning, deep learning, and Physics-Informed Neural Networks.",
  authors: [{ name: "Arawal Shukla" }],
  creator: "Arawal Shukla",
  openGraph: {
    title: "Arawal Shukla | Personal Portfolio",
    description:
      "A personal archive of work, growth, and direction across AI, learning, and thoughtful technical practice.",
    url: "https://arawal.dev",
    siteName: "Arawal Shukla",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
