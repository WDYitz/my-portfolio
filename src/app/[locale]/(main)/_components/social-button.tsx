import { Button } from "@/components/ui/button";
import Link from "next/link";
import { forwardRef, type ReactNode } from "react";

interface SocialLinkProps {
  name: string;
  link: string;
  icon: ReactNode
}

const SocialLink = forwardRef<HTMLButtonElement, SocialLinkProps>(({ name, link, icon }, ref) => {
  return (
    <Button asChild variant="outline" ref={ref}>
      <Link href={link} target="_blank" className="flex gap-2 text-center items-center justify-center opacity-0">{icon}{name}</Link>
    </Button>
  );
})

SocialLink.displayName = "SocialLink";

export default SocialLink;