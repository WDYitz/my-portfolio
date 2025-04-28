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
} from "@/components/ui/timeline"
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWindowScroll } from "react-use";

export default function TimeLine() {
  const timelineRefs = useRef<HTMLDivElement[]>([]);
  const { y } = useWindowScroll()
  const { t } = useTranslation()

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

  useLayoutEffect(() => {
    if (y >= 200) {
      timelineRefs.current.forEach((element, index) => {
        setTimeout(() => {
          element?.classList.add("motion-preset-slide-right", "opacity-100")
        }, 150 * index);
      })
    }
  }, [y])

  return (
    <Timeline defaultValue={3} className="gap-3 px-3 md:p-10 lg:p-20 xl:px-40 2xl:px-80 md:flex md:space-y-0 md:gap-8 overflow-hidden">
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          ref={(el) => {
            if (el) timelineRefs.current[item.id - 1] = el;
          }}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32 opacity-0"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:2xl:-left-52 group-data-[orientation=vertical]/timeline:sm:w-20 
            group-data-[orientation=vertical]/timeline:2xl:w-40 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
