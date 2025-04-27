"use client"
import { useTranslation } from "react-i18next";

const SubHeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5  space-y-12 md:p-10 lg:p-20 xl:px-40 2xl:px-80 md:flex md:space-y-0 md:gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t("moreAboutMe.title")}</h2>
        <p className="text-muted-foreground">{t("frontend.description")}</p>
      </div>
    </div>
  );
}

export default SubHeroSection;