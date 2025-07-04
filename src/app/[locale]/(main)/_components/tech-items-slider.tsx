"use client";
 
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { techStack } from "@/static/data";
 
export function TechStackSlider() {
  const techStackSixItens = techStack.slice(0, 11);
  const techStackTheRestItens = techStack.slice(12);
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-gradient-to-t from-[#0A0A0A] via-[#1f1d1d] to-[#0A0A0A] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={techStackSixItens}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={techStackTheRestItens}
        direction="left"
        speed="normal"
      />
    </div>
  );
}