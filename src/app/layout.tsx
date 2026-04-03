import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contextor.cc"),
  title: {
    default: "Contextor — Software Development & Consulting",
    template: "%s | Contextor",
  },
  description:
    "Contextor is a Seoul-based studio specializing in software development and technical consulting. We design, build, and ship products across platforms.",
  openGraph: {
    title: "Contextor — Software Development & Consulting",
    description:
      "We design, build, and ship products across platforms.",
    url: "https://contextor.cc",
    siteName: "Contextor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contextor — Software Development & Consulting",
    description:
      "We design, build, and ship products across platforms.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
