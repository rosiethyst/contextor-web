import { FadeIn } from "./FadeIn";

interface ServicesDict {
  title: string;
  items: { title: string; description: string }[];
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 15L15 5" />
      <path d="M8 5H15V12" />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <a
        href={`mailto:admin@contextor.cc?subject=${encodeURIComponent(`[${title}]`)}`}
        className="group flex flex-col justify-between rounded-[20px] bg-primary-light p-8 h-full min-h-[260px] transition-transform duration-300 hover:scale-[1.02] no-underline"
      >
        <div>
          <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
          <p className="mt-3 text-base text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 flex justify-end text-gray-500 transition-colors group-hover:text-interactive">
          <ArrowIcon />
        </div>
      </a>
    </FadeIn>
  );
}

export function Services({ dict, locale }: { dict: ServicesDict; locale: string }) {
  const titleWeight = locale === "ko" ? "font-semibold" : "font-medium";
  const topRow = dict.items.slice(0, 2);
  const bottomRow = dict.items.slice(2);

  return (
    <section id="services" className="bg-primary-dark px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className={`font-display text-4xl md:text-5xl ${titleWeight} tracking-tight leading-tight text-primary-light`}>
            {dict.title}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-[3fr_2fr]">
          {topRow.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-[2fr_3fr]">
          {bottomRow.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={(i + 2) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
