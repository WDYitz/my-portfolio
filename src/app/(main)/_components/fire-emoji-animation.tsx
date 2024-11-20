import Image from "next/image"

const FireEmojiAnimation = () => {
  return <Image priority src="/gifs/fire-animation-2.gif" alt="background animation" width={500} height={500} className="z-[-100] absolute top-0 left-0 w-full h-[200px] md:w-[80%] md:h-[400px]" />
}

export default FireEmojiAnimation;