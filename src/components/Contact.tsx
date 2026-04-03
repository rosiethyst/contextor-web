interface ContactDict {
  title: string;
  subtitle: string;
  cta: string;
}

export function Contact({ dict, locale }: { dict: ContactDict; locale: string }) {
  const titleWeight = locale === "ko" ? "font-semibold" : "font-medium";

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2 className={`font-display text-4xl md:text-5xl ${titleWeight} tracking-tight leading-tight text-primary-dark`}>
          {dict.title}
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-lg">
          {dict.subtitle}
        </p>

        <a
          href="mailto:admin@contextor.cc"
          className="mt-8 inline-block rounded-full bg-interactive px-8 py-3.5 text-base font-medium text-primary-light transition-opacity hover:opacity-85"
        >
          {dict.cta}
        </a>
      </div>
    </section>
  );
}
