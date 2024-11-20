import ConfettiButton, { type ConfettiButtonProps } from "@/app/(main)/_components/confetti-button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  buttonProps: ConfettiButtonProps
}

const ProjectCard = ({ description, buttonProps, title }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <ConfettiButton icon={buttonProps.icon} name={buttonProps.name} link={buttonProps.link} />
      </CardContent>
    </Card>
  );
}

export default ProjectCard;