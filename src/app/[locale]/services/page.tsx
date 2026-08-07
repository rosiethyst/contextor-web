import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { getDictionary, type Locale } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.services.page.metaTitle,
    description: dict.services.page.intro,
  };
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-interactive"
    >
      <path d="M4 10.5L8.5 15L16 5.5" />
    </svg>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.services.page;
  const titleWeight = locale === "ko" ? "font-semibold" : "font-medium";

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      {/* Title */}
      <FadeIn>
        <h1
          className={`font-display text-4xl md:text-5xl ${titleWeight} tracking-tight leading-tight text-primary-dark`}
        >
          {p.title}
        </h1>
        <p className="mt-6 max-w-[720px] text-lg text-gray-600 leading-relaxed">
          {p.intro}
        </p>
      </FadeIn>

      {/* Flagship: Personal AI Consulting */}
      <FadeIn delay={100}>
        <section className="mt-14 rounded-[24px] bg-primary-dark p-8 md:p-12 text-primary-light">
          <span className="inline-block rounded-full bg-interactive/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light">
            {p.flagship.badge}
          </span>
          <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className={`text-3xl md:text-4xl ${titleWeight} tracking-tight`}>
              {p.flagship.title}
            </h2>
            <div className="text-left md:text-right">
              <div className="text-3xl font-semibold">{p.flagship.price}</div>
              <div className="mt-1 text-sm text-gray-400">
                {p.flagship.priceNote}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-[680px] text-base text-gray-300 leading-relaxed">
            {p.flagship.description}
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {p.flagship.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col md:flex-row md:items-center gap-4">
            <a
              href={`mailto:admin@contextor.cc?subject=${encodeURIComponent(`[${p.flagship.title}]`)}`}
              className="inline-block rounded-full bg-primary-light px-7 py-3 text-sm font-semibold text-primary-dark transition-opacity hover:opacity-85 no-underline text-center"
            >
              {p.flagship.cta}
            </a>
            <span className="text-xs text-gray-400">{p.flagship.status}</span>
          </div>
        </section>
      </FadeIn>

      {/* Other offerings */}
      <section className="mt-20">
        <FadeIn>
          <h2
            className={`font-display text-2xl md:text-3xl ${titleWeight} tracking-tight text-primary-dark`}
          >
            {p.othersTitle}
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {p.others.map((o, i) => (
            <FadeIn key={o.title} delay={i * 100}>
              <a
                href={`mailto:admin@contextor.cc?subject=${encodeURIComponent(`[${o.title}]`)}`}
                className="group flex flex-col justify-between rounded-[20px] border border-gray-200 p-7 h-full min-h-[220px] transition-transform duration-300 hover:scale-[1.02] no-underline"
              >
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {o.description}
                  </p>
                </div>
                <div className="mt-6 text-sm font-medium text-interactive">
                  {o.price}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20">
        <FadeIn>
          <h2
            className={`font-display text-2xl md:text-3xl ${titleWeight} tracking-tight text-primary-dark`}
          >
            {p.processTitle}
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {p.process.map((s, i) => (
            <FadeIn key={s.step} delay={i * 100}>
              <div className="rounded-[20px] bg-gray-50 p-6 h-full">
                <div className="text-sm font-semibold text-interactive">
                  {s.step}
                </div>
                <h3 className="mt-2 text-base font-semibold text-primary-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="mt-20 rounded-[24px] bg-gray-50 p-10 md:p-14 text-center">
          <h2
            className={`font-display text-2xl md:text-3xl ${titleWeight} tracking-tight text-primary-dark`}
          >
            {p.contactTitle}
          </h2>
          <p className="mt-3 text-base text-gray-500">{p.contactBody}</p>
          <a
            href="mailto:admin@contextor.cc"
            className="mt-7 inline-block rounded-full bg-primary-dark px-8 py-3.5 text-sm font-semibold text-primary-light transition-opacity hover:opacity-85 no-underline"
          >
            {p.contactCta}
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
