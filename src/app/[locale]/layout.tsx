import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, type Locale, locales } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contextor.cc"),
  title: {
    default: "Contextor — Software Development & Consulting",
    template: "%s | Contextor",
  },
  description:
    "Contextor is a Seoul-based studio specializing in software development and technical consulting. We design, build, and ship products across platforms.",
  openGraph: {
    title: "Contextor — Software Development & Consulting",
    description: "We design, build, and ship products across platforms.",
    url: "https://www.contextor.cc",
    siteName: "Contextor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contextor — Software Development & Consulting",
    description: "We design, build, and ship products across platforms.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header dict={dict.header} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict.footer} locale={locale} />
      </body>
    </html>
  );
}
