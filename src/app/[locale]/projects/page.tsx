import initTranslations from "@/app/i18n";
import TranslationProvider from "@/contexts/TranslationProvider";
import Projects from "./_components/projects";

interface AboutMeWrapperProps {
  params: {
    locale: string
  },
}

const ProjectsWrapper = async ({ params: { locale } }: AboutMeWrapperProps) => {
  const i18nNamespace = ["ProjectsPage"]
  const { resources } = await initTranslations(locale, i18nNamespace)
  return (
    <TranslationProvider resources={resources} locale={locale} namespace={i18nNamespace}>
      <Projects />
    </TranslationProvider>
  );
}

export default ProjectsWrapper;