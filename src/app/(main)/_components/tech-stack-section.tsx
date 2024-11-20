"use client"
import { techStack } from "@/static/data";
import { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import TechItem from "./tech-item";

const TechStackSection = () => {
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { y } = useWindowScroll()

  useLayoutEffect(() => {
    if (y >= 500) {
      techRefs.current.forEach((element, index) => {
        setTimeout(() => {
          element?.classList.add("motion-preset-slide-right", "opacity-100")
        }, 150 * index);
      })
    }
  }, [y])

  return (
    <div className="px-5 pb-8 md:p-10 lg:p-20 xl:px-40 2xl:px-80 lg:space-y-8">
      <h1 className="text-4xl font-bold">Tech Stack and Tools</h1>
      <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 h-[400px]">
        {techStack.map((tech) => (
          <TechItem
            key={tech.icon}
            icon={tech.icon}
            name={tech.name ?? ""}
            ref={el => {
              if (el) techRefs.current.push(el);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;

