"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import React from "react";

interface ConfettiButtonProps {
  icon: ReactNode,
  name: string,
  link: string
}

const ConfettiButton = ({ icon, name, link }: ConfettiButtonProps) => {
  const refButton = useRef<HTMLButtonElement>(null)
  const route = useRouter()

  const handleRouteChange = (link: string) => {
    refButton.current?.classList.add("motion-preset-confetti")
    setTimeout(() => {
      refButton.current?.classList.remove("motion-preset-confetti")
      route.push(link)
    }, 1000)
  }

  return (
    <Button variant="default" onClick={() => handleRouteChange(link)} ref={refButton}>
      {icon}
      <p>{name}</p>
    </Button>
  );
}

export default ConfettiButton;