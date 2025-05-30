import initTranslations from "@/app/i18n";
import TranslationProvider from "@/contexts/TranslationProvider";
import HeroSection from "./_components/hero-section";
import MyProjectsSection from "./_components/my-projects-section";
import SubHeroSection from "./_components/sub-hero-section";
import TechStackSection from "./_components/tech-stack-section";
import TimeLine from "./_components/timeline";

interface HomeProps {
  params: {
    locale: string
  }
}

const Home = async ({ params: { locale } }: HomeProps) => {
  const i18nNamespace = ["Homepage"]
  const { resources } = await initTranslations(locale, i18nNamespace)

  return (
    <main className="space-y-20 overflow-x-hidden absolute">
      <TranslationProvider resources={resources} locale={locale} namespace={i18nNamespace}>
        <HeroSection />
        <TimeLine />
        <SubHeroSection />
        <TechStackSection />
        <MyProjectsSection />
      </TranslationProvider>
    </main >
  );
}

export default Home;