import { FadeIn } from "./FadeIn";

interface FooterDict {
  tagline: string;
  privacy: string;
  rights: string;
}

export function Footer({ dict, locale }: { dict: FooterDict; locale: string }) {
  return (
    <footer className="border-t border-gray-200 bg-primary-light">
      <FadeIn>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <img src="/logo.jpg" alt="Contextor" className="h-6" />
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {dict.tagline}
              </p>
            </div>

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

            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`/${locale}/privacy`}
                className="text-gray-500 hover:text-primary-dark transition-colors"
              >
                {dict.privacy}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Contextor Co., LTD. {dict.rights}
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
