import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Contextor Co., LTD. Privacy Policy",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.privacy;

  return (
    <article className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
      <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-dark">
        {p.title}
      </h1>
      <p className="mt-4 text-sm text-gray-500">{p.effectiveDate}</p>

      <div className="mt-12 space-y-10 text-base text-gray-700 leading-relaxed">
        {p.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-primary-dark">
              {section.title}
            </h2>
            <p className="mt-3">{section.content}</p>
            {"list" in section && section.list && (
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
