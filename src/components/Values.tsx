import { FadeIn } from "./FadeIn";

interface ValuesDict {
  title: string;
  items: { title: string; description: string }[];
}

export function Values({ dict, locale }: { dict: ValuesDict; locale: string }) {
  const titleWeight = locale === "ko" ? "font-semibold" : "font-medium";

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className={`font-display text-4xl md:text-5xl ${titleWeight} tracking-tight leading-tight text-primary-dark`}>
            {dict.title}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.items.map((value, i) => (
            <FadeIn key={value.title} delay={i * 100} className="h-full">
              <div className="rounded-[20px] bg-gray-100 p-8 h-full transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-primary-dark">
                  {value.title}
                </h3>
                <p className="mt-3 text-base text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
