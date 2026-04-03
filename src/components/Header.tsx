"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-light/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 h-16">
        <a
          href="/"
          className="font-display text-xl font-medium tracking-tight text-primary-dark"
        >
          Contextor
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-primary-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:admin@contextor.cc"
            className="rounded-full bg-primary-dark px-6 py-2.5 text-sm font-medium text-primary-light transition-opacity hover:opacity-85"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-primary-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-primary-light px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-primary-dark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:admin@contextor.cc"
            className="rounded-full bg-primary-dark px-6 py-2.5 text-sm font-medium text-primary-light text-center transition-opacity hover:opacity-85"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}
