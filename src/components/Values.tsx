import { FadeIn } from "./FadeIn";

const VALUES = [
  {
    title: "Leverage Technology",
    description:
      "We use modern tools and automation to punch above our weight. A small team delivering outsized results.",
  },
  {
    title: "Remote-First",
    description:
      "Our infrastructure supports full capacity regardless of location. Flexible collaboration, zero compromise.",
  },
  {
    title: "Bias for Action",
    description:
      "Ideas become prototypes fast. We prioritize rapid execution and iteration over prolonged planning.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "A precise, compact team. Every deliverable meets a high standard — no exceptions.",
  },
];

export function Values() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-dark">
            How We Work
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <FadeIn key={value.title} delay={i * 100}>
              <div className="rounded-[20px] bg-gray-100 p-8 transition-transform duration-300 hover:scale-[1.02]">
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
