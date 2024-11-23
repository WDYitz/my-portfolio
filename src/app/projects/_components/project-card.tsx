import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Eye, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, type LegacyRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string
  image?: string
}

const ProjectCard = forwardRef(function ProjectCardRef(props: ProjectCardProps, ref: LegacyRef<HTMLDivElement> | undefined) {
  return (
    <Card ref={ref}>
      <CardContent className="md:flex h-full">
        <div className="space-y-4 pt-6 flex flex-col justify-between">
          <CardTitle>{props.title}</CardTitle>
          <p>{props.description}</p>
          <div className="flex space-x-4">
            <Button asChild variant="outline">
              <Link href={props.url} target="_blank" className="gap-2 space-x-2">
                <LinkIcon />
                See project
              </Link>
            </Button>
            <Dialog>
              <DialogTitle className="sr-only">{props.title}</DialogTitle>
              <DialogTrigger asChild>
                <Button variant="default" className="gap-2 space-x-2">
                  <Eye />
                  Take a peek
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full h-full p-4 flex justify-center items-center">
                <Image src={props.image ?? ""} alt={props.title} className="rotate-90 md:rotate-0" width={1200} height={100} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
})

export default ProjectCard;