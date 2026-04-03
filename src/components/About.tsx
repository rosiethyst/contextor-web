import { FadeIn } from "./FadeIn";

interface AboutDict {
  title: string;
  description1: string;
  description2: string;
}

export function About({ dict, locale }: { dict: AboutDict; locale: string }) {
  const titleWeight = locale === "ko" ? "font-semibold" : "font-medium";

  return (
    <section id="about" className="bg-gray-100 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className={`font-display text-4xl md:text-5xl ${titleWeight} tracking-tight leading-tight text-primary-dark`}>
            {dict.title}
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <FadeIn delay={100}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {dict.description1}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {dict.description2}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
