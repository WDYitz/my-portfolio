import { Card, CardContent } from "@/components/ui/card";
import { Link2Icon } from "lucide-react";
import ConfettiButton from "./confetti-button";

const MyProjectsSection = () => {
  return (
    <div className="bg-secondaryBackground px-5 md:p-10 lg:p-20 xl:px-40 2xl:px-80 py-12 space-y-12 md:flex md:space-y-0 md:gap-8">
      <Card className="space-y-4 px-8 py-6 rounded-md flex flex-col justify-between h-full" >
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold">React apps,<br></br> Node APIs, Experimental apps and study apps</h2>
          <ConfettiButton icon={<Link2Icon />} name="See my projects" link="/projects" />
        </CardContent>
      </Card>
      <Card className="space-y-4 px-8 py-6 rounded-md">
        <CardContent className="space-y-6 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold">Want to know more about me?</h2>
          <ConfettiButton icon={<Link2Icon />} name="About me" link="/about-me" />
        </CardContent>
      </Card>
    </div>
  );
}

export default MyProjectsSection;