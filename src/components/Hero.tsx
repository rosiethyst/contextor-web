"use client";

const LETTERS = "Contextor".split("");
const STAGGER_MS = 60;
const BASE_DELAY_MS = 100;

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 md:py-40 overflow-hidden">
      <h1 className="font-display text-5xl md:text-7xl lg:text-[112px] font-medium tracking-tight leading-none text-primary-dark text-center">
        {LETTERS.map((char, i) => (
          <span
            key={i}
            className="inline-block animate-letter-reveal"
            style={{
              animationDelay: `${BASE_DELAY_MS + i * STAGGER_MS}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-500 text-center max-w-lg animate-hero-sub">
        We build software that works.
      </p>
      <a
        href="#contact"
        className="mt-10 rounded-full bg-primary-dark px-8 py-3.5 text-base font-medium text-primary-light transition-opacity hover:opacity-85 animate-hero-cta"
      >
        Get in Touch
      </a>
    </section>
  );
}
