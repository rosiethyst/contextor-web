import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Contextor Co., LTD. Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
      <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-primary-dark">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-gray-500">
        Effective Date: April 3, 2026
      </p>

      <div className="mt-12 space-y-10 text-base text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            1. Introduction
          </h2>
          <p className="mt-3">
            Contextor Co., LTD. (&quot;Contextor,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you use our website and
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            2. Information We Collect
          </h2>
          <p className="mt-3">We may collect the following types of information:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>
              <strong>Personal Data:</strong> Name, email address, and other
              contact details you provide when contacting us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you access and
              use our website, including IP address, browser type, pages visited,
              and time spent.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system,
              and unique device identifiers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            3. How We Use Information
          </h2>
          <p className="mt-3">We use collected information to:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send relevant communications with your consent</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            4. Third-Party Services
          </h2>
          <p className="mt-3">
            We may use third-party services for hosting, analytics, and other
            operational purposes. These services may collect information as
            specified in their own privacy policies. We encourage you to review
            the privacy policies of any third-party services we use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            5. Data Retention
          </h2>
          <p className="mt-3">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy, or as required by law.
            When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            6. Your Rights
          </h2>
          <p className="mt-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:admin@contextor.cc"
              className="text-interactive hover:text-action transition-colors"
            >
              admin@contextor.cc
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            7. Children&apos;s Privacy
          </h2>
          <p className="mt-3">
            Our services are not directed to children under the age of 14. We do
            not knowingly collect personal information from children. If you
            believe we have collected data from a child, please contact us
            immediately so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            8. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary-dark">
            9. Contact Us
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <div className="mt-3 text-sm">
            <p className="font-medium text-primary-dark">
              Contextor Co., LTD.
            </p>
            <p>1310, 298 Nangok-ro, Gwanak-gu, Seoul, South Korea</p>
            <p>
              <a
                href="mailto:admin@contextor.cc"
                className="text-interactive hover:text-action transition-colors"
              >
                admin@contextor.cc
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
