import Image from "next/image";
import { forwardRef } from "react";

interface TechButtonProps {
  name: string;
  icon: string;
}

const TechItem = forwardRef(function TechItemWithRef(props: TechButtonProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div className="flex justify-start items-center space-x-3 p-2 w-[160px] md:w-[180px] lg:w-[190px] select-none hover:motion-preset-seesaw transition-all opacity-0" ref={ref}>
      <Image src={`/icons/${props.icon}`} alt={props.name} width={25} height={25} className="w-auto h-auto" />
      <p className="text-sm sm:text-md md:text-lg lg:text-xl">{props.name}</p>
    </div>
  );
})



export default TechItem;