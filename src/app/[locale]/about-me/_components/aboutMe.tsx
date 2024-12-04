"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";
import { useEffect, useRef } from "react";
import ConfettiButton from "../../(main)/_components/confetti-button"
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);
  const paragraph4Ref = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const refsAnimationArray = [titleRef.current, paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current, paragraph4Ref.current, cardRef.current];
    const animations = "motion-scale-in-[0.43] motion-translate-x-in-[-30%] motion-translate-y-in-[40%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.53s]/scale motion-duration-[0.57s]/translate motion-duration-[0.64s]/opacity motion-duration-[0.63s]/rotate motion-duration-[0.35s]/blur opacity-100".split(" ");

    refsAnimationArray.forEach((element, index) => {
      setTimeout(() => {
        if (element?.ariaLabel === "card") {
          element?.classList.add(...animations);
        }
        element?.classList.add("motion-preset-blur-left", "opacity-100")
      }, 200 * index);
    })
  }, [])

  return (
    <main className="pb-6  flex flex-col items-start space-y-6 pt-16 px-5 sm:flex sm:justify-between md:gap-8 md:p-10 lg:p-20 lg:pt-28 lg:flex-row xl:px-40 2xl:px-80 2xl:pt-80 h-full">
      <div>
        <p className="text-4xl opacity-0" ref={titleRef}>{t("title")}</p>
        <p className="text-lg mt-8 opacity-0" ref={paragraph1Ref}>{t("paragraphs.1")}</p>
        <p className="text-lg mt-8 opacity-0" ref={paragraph2Ref}>{t("paragraphs.2")}</p>
        <p className="text-lg mt-8 opacity-0" ref={paragraph3Ref}>{t("paragraphs.3")}</p>
        <p className="text-lg mt-8 opacity-0" ref={paragraph4Ref}>{t("paragraphs.4")}</p>
      </div>

      <Card className="p-4 md:p-6 md:w-[280px] flex justify-center items-center opacity-0" aria-label="card" ref={cardRef}>
        <CardContent className="py-2 space-y-6 h-full justify-between flex flex-col">
          <p className="w-36">{t("projectsCard.title")}</p>
          <ConfettiButton icon={<Link />} name={t("projectsCard.button")} link="/projects" />
        </CardContent>
      </Card>
    </main>
  );
}

export default AboutMe;