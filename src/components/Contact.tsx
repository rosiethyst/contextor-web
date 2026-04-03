export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-dark">
          Ready to start a project?
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-lg">
          Drop us a line. We&apos;d love to hear about what you&apos;re
          building.
        </p>

        <a
          href="mailto:admin@contextor.cc"
          className="mt-8 inline-block rounded-full bg-interactive px-8 py-3.5 text-base font-medium text-primary-light transition-opacity hover:opacity-85"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
