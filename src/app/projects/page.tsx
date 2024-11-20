"use client"
import { useEffect, useRef } from "react";

const Projects = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const contructionRef = useRef<HTMLParagraphElement>(null);
  // const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refsAnimationArray = [titleRef.current, contructionRef.current];

    refsAnimationArray.forEach((element, index) => {
      setTimeout(() => {
        if (element?.ariaLabel === "title") {
          element?.classList.add("motion-preset-slide-right", "opacity-100");
        } else {
          element?.classList.add("motion-preset-slide-right", "opacity-100")
        }
      }, 200 * index);
    })
  }, [])

  return (
    <main className="pb-6 flex flex-col items-start space-y-6 pt-16 px-5 sm:flex sm:justify-between md:gap-8 md:p-10 lg:p-20 lg:pt-28 xl:px-40 2xl:px-80 2xl:pt-80 h-full">
      <div className="space-y-4">
        <p className="text-4xl opacity-0" ref={titleRef} aria-label="title">Academical Projects</p>
        <p className="text-2xl opacity-0 tracking-widest" ref={contructionRef}>Coming Soon 🛑</p>
      </div>

      {/* {
        projects.map((project, index) => (
          <div key={index} ref={cardRef} className="w-full opacity-0">
            <ProjectCard
              title={project.title}
              description={project.description}
              buttonProps={project.buttonProps}
            />
          </div>
        ))
      } */}

    </main>
  );
}

export default Projects;