import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { JSX, ReactNode, RefAttributes } from "react";

interface SocialLinkProps {
  name: string;
  link: string;
  icon: ReactNode
}

const SocialLink = ({ name, link, icon, ...props }: SocialLinkProps & JSX.IntrinsicAttributes & RefAttributes<HTMLButtonElement>) => {
  return (
    <Button asChild variant="outline" {...props}>
      <Link href={link} target="_blank" className="flex gap-2 text-center items-center justify-center opacity-0">{icon}{name}</Link>
    </Button>
  );
}

export default SocialLink;