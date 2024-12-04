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
  isMobile?: boolean
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
                <div className="absolute top-0 left-0 p-4 flex justify-center items-center md:opacity-0">
                  <p className="text-sm w-28 mr-4">Use your fingers to zoom in</p>
                  <Image src="/projects/zoom_in.png" alt="zoom in" width={70} height={100} className="bg-white rounded-full p-4" />
                </div>
                <div className={`relative w-[1200px] h-[250px] max-h-[400px] md:w-[500px] md:min-h-[290px] lg:w-[1200px] lg:min-h-[700px] ${props.isMobile ? "pt-20 md:rotate-0 w-[300px] h-full" : "rotate-90"} md:rotate-0 flex justify-center`}>
                  <Image src={props.image ?? ""} alt={props.title} fill priority />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
})

export default ProjectCard;