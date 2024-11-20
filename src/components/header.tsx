import FireEmojiAnimation from "@/app/(main)/_components/fire-emoji-animation";
import NavBar from "./navbar";

const Header = () => {
  return (
    <header className="p-4 flex justify-end gap-2 relative">
      <NavBar />
      <FireEmojiAnimation />
    </header>
  );
}

export default Header;