import { FadeIn } from "./FadeIn";

const TOP_ROW = [
  {
    title: "Custom Platform Development",
    description:
      "Tailored software platforms designed and built for your specific needs — from data systems to customer-facing products.",
  },
  {
    title: "Intelligent Automation",
    description:
      "Workflow automation, data pipelines, and smart tools that eliminate repetitive work and accelerate your operations.",
  },
];

const BOTTOM_ROW = [
  {
    title: "Technical Consulting",
    description:
      "Strategic guidance on technology decisions, architecture, and team capabilities to help you build the right thing, the right way.",
  },
  {
    title: "Product Design & Development",
    description:
      "Full-cycle product development from concept to launch — mobile apps, web platforms, and everything in between.",
  },
];

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
      <div className="group flex flex-col justify-between rounded-[20px] bg-primary-light p-8 h-full min-h-[260px] transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
          <p className="mt-3 text-base text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 flex justify-end text-gray-500 transition-colors group-hover:text-interactive">
          <ArrowIcon />
        </div>
      </div>
    </FadeIn>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-primary-dark px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-light">
            Services
          </h2>
        </FadeIn>

        {/* Top row: 6:4 ratio */}
        <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-[3fr_2fr]">
          {TOP_ROW.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>

        {/* Bottom row: 4:6 ratio */}
        <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-[2fr_3fr]">
          {BOTTOM_ROW.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={(i + 2) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
