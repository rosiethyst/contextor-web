import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-primary-light">
      <FadeIn>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <p className="font-display text-lg font-medium tracking-tight text-primary-dark">
                Contextor
              </p>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Software Development &amp; Technical Consulting
              </p>
            </div>

            {/* Company info */}
            <div className="text-sm text-gray-500 leading-relaxed space-y-1">
              <p>Contextor Co., LTD.</p>
              <p>1310, 298 Nangok-ro, Gwanak-gu, Seoul, South Korea</p>
              <p>Business Reg. 797-88-03642</p>
              <p>
                <a
                  href="mailto:admin@contextor.cc"
                  className="text-interactive hover:text-action transition-colors"
                >
                  admin@contextor.cc
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-primary-dark transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Contextor Co., LTD. All rights
            reserved.
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
