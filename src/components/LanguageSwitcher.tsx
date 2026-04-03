"use client";

import { usePathname } from "next/navigation";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ko" : "en";
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <a
      href={targetPath}
      className="text-sm font-medium text-gray-500 transition-colors hover:text-primary-dark"
    >
      {locale === "en" ? "한국어" : "EN"}
    </a>
  );
}
