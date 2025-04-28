import { cn } from "@/lib/utils"
import Image from "next/image"

type FireEmojiAnimationProps = {
  className?: string
}

const FireEmojiAnimation = ({ className }: FireEmojiAnimationProps) => {
  return <Image
    priority
    src="/gifs/fire-animation-2.gif"
    alt="background animation"
    width={500}
    height={500}
    className={cn("z-[-100] absolute w-full h-[200px] md:w-[80%] md:h-[400px]", className)}
    unoptimized
  />
}

export default FireEmojiAnimation;