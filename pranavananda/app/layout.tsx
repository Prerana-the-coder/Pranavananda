import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pranavananda International School",
    template: "%s | Pranavananda International School",
  },
  description:
    "An educational institution of Bharat Sevashram Sangha, imparting present-day education blended with high moral values, strict discipline and a holistic approach to physical, mental, intellectual and spiritual growth.",
  keywords: ["school", "education", "Gurugram", "CBSE", "Pranavananda", "Bharat Sevashram Sangha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)]`}> 
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
