"use client"
import { projectsData } from "@/static/projects-data";
import { useEffect, useRef } from "react";
import AlertCard from "./alert";
import ProjectCard from "./project-card";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const alertCardRef = useRef<HTMLDivElement>(null);
  const params = useParams()
  const { t } = useTranslation("ProjectsPage");


  useEffect(() => {
    titleRef.current?.classList.add("motion-preset-slide-right", "opacity-100");
    setTimeout(() => alertCardRef.current?.remove(), 4000)

    cardsRef.current.forEach((element, index) => {
      setTimeout(() => {
        element?.classList.add("motion-preset-blur-left", "opacity-100")
      }, 90 * index);
    })

  }, [])

  return (
    <main className="pb-6 flex flex-col items-start space-y-6 pt-16 px-5 sm:flex sm:justify-between md:gap-8 md:p-10 lg:p-20 lg:pt-28 xl:px-40 2xl:px-80 2xl:pt-80 h-full overflow-hidden">
      <div className="space-y-8">
        <AlertCard ref={alertCardRef} />
        <p className="text-4xl opacity-0" ref={titleRef}>{t("title")}</p>
        <div className="w-full lg:grid lg:grid-cols-2 lg:space-y-0 md:gap-4 space-y-6 xl:grid xl:grid-cols-2 xl:gap-6 xl:space-y-0 ">
          {
            projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                ref={el => {
                  if (el) cardsRef.current.push(el);
                }}
                title={project.name}
                description={params.locale === "pt" ? project.descriptionPT : project.description}
                url={project.url}
                image={project?.image}
                isMobile={project?.mobile}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Projects;