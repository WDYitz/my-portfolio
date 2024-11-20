"use client"
import { Github, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SocialLink from "./social-button";

const HeroSection = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const linkedinRef = useRef<HTMLButtonElement>(null);
  const githubRef = useRef<HTMLButtonElement>(null);
  const borderImageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const refsAnimationArray = [titleRef.current, paragraphRef.current, imageRef.current, linkedinRef.current, githubRef.current, borderImageRef.current];
    const animations = "motion-scale-in-[0.43] motion-translate-x-in-[-30%] motion-translate-y-in-[40%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.53s]/scale motion-duration-[0.57s]/translate motion-duration-[0.64s]/opacity motion-duration-[0.63s]/rotate motion-duration-[0.35s]/blur".split(" ");

    refsAnimationArray.forEach((element, index) => {
      setTimeout(() => {
        if (element?.ariaLabel === "image") {
          element?.classList.add(animations[0], animations[1], animations[2], animations[3], animations[4], animations[5], animations[6], animations[7], animations[8], animations[9], animations[10], "opacity-100");
        }
        element?.classList.add("motion-preset-slide-right", "opacity-100")
      }, 300 * index);
    })
  }, [])

  return (
    <div className="space-y-6 sm:flex sm:justify-between md:gap-8 px-5 md:p-10 lg:p-20 xl:px-40 2xl:px-80 ">
      <div className="space-y-6 sm:flex sm:flex-col sm:justify-center md:flex md:flex-col md:justify-center">
        <h1 className="text-5xl font-bold lg:text-6xl opacity-0" ref={titleRef}>Fullstack <br></br> Developer</h1>
        <p className="sm:pr-4 lg:text-lg opacity-0" ref={paragraphRef}>
          Driven by the desire to learn and innovate,<br></br> Enthusiast of web development technologies.
        </p>
        <div className="flex space-x-4" >
          <SocialLink name="Linkedin" link="https://www.linkedin.com/in/yitzhakbenrodriguez/" icon={<LinkedinIcon />} ref={linkedinRef} />
          <SocialLink name="Github" link="https://github.com/WDYitz" icon={<Github />} ref={githubRef} />
        </div>
      </div>
      <div className="relative max-w-[250px]">
        <Image
          ref={imageRef}
          aria-label="image"
          src="/me-2.png"
          width={200}
          height={100}
          alt="selfie of myself"
          className="rounded-md sm:w-[250px] lg:w-[300px] opacity-0"
          loading="eager"
        />
        <span className="absolute border-2 border-dashed w-[200px] h-[240px] top-[30px] right-[-10px] z-[-100] rounded-md opacity-0 sm:right-[-30px] md:right-[-50px] md:h-[300px] md:w-[240px]" ref={borderImageRef}></span>
      </div>
    </div>
  );
}

export default HeroSection;