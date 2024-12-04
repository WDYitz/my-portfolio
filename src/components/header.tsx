import FireEmojiAnimation from "@/app/[locale]/(main)/_components/fire-emoji-animation";
import LanguageChanger from "./LanguageChanger";
import NavBar from "./navbar";

const Header = () => {
  return (
    <header className="p-4 flex justify-end gap-2 relative">
      <LanguageChanger />
      <NavBar />
      <FireEmojiAnimation />
    </header>
  );
}

export default Header;