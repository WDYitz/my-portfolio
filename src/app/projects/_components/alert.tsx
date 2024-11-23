import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { forwardRef } from "react";

const AlertCard = forwardRef<HTMLDivElement, unknown>(function AlertCardRef(_props, ref) {
  return (
    <Alert className="absolute top-4 left-2 w-full max-w-[500px] motion-preset-expand" ref={ref}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="text-sm">Heads up!</AlertTitle>
      <AlertDescription className="text-sm">
        Some projects might not have a image or a live demo.
      </AlertDescription>
    </Alert>
  );
})

export default AlertCard;