"use client"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { } from "react-use";
const MotionTimelineItem = motion(TimelineItem);
const MotionTimelineDate = motion(TimelineDate);

export default function TimeLine() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      date: t("timeline.senac.date"),
      title: t("timeline.senac.title"),
      description: t("timeline.senac.description"),
    },
    {
      id: 2,
      date: t("timeline.college.date"),
      title: t("timeline.college.title"),
      description: t("timeline.college.description"),
    },
    {
      id: 3,
      date: t("timeline.react.date"),
      title: t("timeline.react.title"),
      description: t("timeline.react.description"),
    },
    {
      id: 4,
      date: t("timeline.node.date"),
      title: t("timeline.node.title"),
      description: t("timeline.node.description"),
    },
    {
      id: 5,
      date: t("timeline.docker.date"),
      title: t("timeline.docker.title"),
      description: t("timeline.docker.description"),
    },
  ]

  const timelineAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.2,
      type: "spring" as const,
      stiffness: 100,
      duration: 0.3,
    },
  }

  return (
    <Timeline defaultValue={1} className="gap-3 px-3 md:p-10 lg:p-20 xl:px-40 2xl:px-80 md:flex md:space-y-0 md:gap-8 overflow-hidden">
      {items.map((item) => {
        return (
          <MotionTimelineItem
            key={item.id}
            step={item.id}
            initial={timelineAnimation.initial}
            animate={timelineAnimation.animate}
            transition={{
              ...timelineAnimation.transition,
              delay: timelineAnimation.transition.delay * item.id + 1,
            }}
            className="group-data-[orientation=vertical]/timeline:sm:ms-32 opacity-0"
          >
            <TimelineHeader>
              <TimelineSeparator />
              <MotionTimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:2xl:-left-52 group-data-[orientation=vertical]/timeline:sm:w-20
              group-data-[orientation=vertical]/timeline:2xl:w-40 group-data-[orientation=vertical]/timeline:sm:text-right w-0 overflow-hidden"
                {...timelineAnimation}
              >
                {item.date}
              </MotionTimelineDate>
              <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </MotionTimelineItem>
        )
      })}
    </Timeline>
  )
}
