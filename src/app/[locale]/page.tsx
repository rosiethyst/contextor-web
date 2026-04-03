import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { getDictionary, type Locale } from "@/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} locale={locale} />
      <Values dict={dict.values} locale={locale} />
      <Services dict={dict.services} locale={locale} />
      <Contact dict={dict.contact} locale={locale} />
    </>
  );
}
