"use client"
import { useTranslation } from "react-i18next";

const SubHeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-secondaryBackground px-5 md:p-10 lg:p-20 xl:px-40 2xl:px-80 py-12 space-y-12 md:flex md:space-y-0 md:gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Front-end</h2>
        <p> {t("frontend.description")}<br></br> <br></br> {t("frontend.description2")}</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Back-end</h2>
        <p>{t("backend.description")}<br></br><br></br>{t("backend.description2")}</p>
      </div>
    </div>
  );
}

export default SubHeroSection;