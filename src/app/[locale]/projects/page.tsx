import initTranslations from "@/app/i18n";
import TranslationProvider from "@/contexts/TranslationProvider";
import Projects from "./_components/projects";

export const i18nNamespace = ["ProjectsPage"]

interface AboutMeWrapperProps {
  params: {
    locale: string
  },
}

const ProjectsWrapper = async ({ params: { locale } }: AboutMeWrapperProps) => {
  const { resources } = await initTranslations(locale, i18nNamespace)
  return (
    <TranslationProvider resources={resources} locale={locale} namespace={i18nNamespace}>
      <Projects />
    </TranslationProvider>
  );
}

export default ProjectsWrapper;