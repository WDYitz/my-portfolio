"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Link2Icon } from "lucide-react";
import ConfettiButton from "./confetti-button";
import { useTranslation } from "react-i18next";

const MyProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-secondaryBackground px-8 md:p-10 lg:p-20 xl:px-40 2xl:px-80 py-12 space-y-12 md:flex md:space-y-0 md:gap-8">
      <Card className="p-8 rounded-md w-full md:w-[50%] opacity-100">
        <CardContent className="space-y-6 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
          <ConfettiButton icon={<Link2Icon />} name={t("projects.button")} link="/projects" />
        </CardContent>
      </Card>
      <Card className="p-8 rounded-md w-full md:w-[50%] opacity-100">
        <CardContent className="space-y-6 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold">{t("aboutMe.title")}</h2>
          <ConfettiButton icon={<Link2Icon />} name={t("aboutMe.button")} link="/about-me" />
        </CardContent>
      </Card>
    </div>
  );
}

export default MyProjectsSection;