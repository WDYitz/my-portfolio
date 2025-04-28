import initTranslations from "@/app/i18n";
import TranslationProvider from "@/contexts/TranslationProvider";
import AboutMe from "./_components/aboutMe";

interface AboutMeWrapperProps {
  params: {
    locale: string
  },
}

const AboutMeWrapper = async ({ params: { locale } }: AboutMeWrapperProps) => {
  const i18nNamespace = ["AboutMePage"]
  const { resources } = await initTranslations(locale, i18nNamespace)
  return (
    <TranslationProvider resources={resources} locale={locale} namespace={i18nNamespace}>
      <AboutMe />
    </TranslationProvider>
  );
}

export default AboutMeWrapper;