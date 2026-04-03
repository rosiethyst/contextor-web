import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="bg-gray-100 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-dark">
            About
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <FadeIn delay={100}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contextor is a Seoul-based studio specializing in software
              development and technical consulting. We design, build, and ship
              products across platforms — from mobile apps to enterprise systems.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our small, focused team moves fast without compromising quality. We
              leverage modern tools and automation to deliver results that
              traditionally require much larger teams.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
