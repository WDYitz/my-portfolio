"use client"
import { DialogTitle } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const NavBar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAboutMe = pathname === "/about-me";
  const isProjects = pathname === "/projects";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="size-20" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <DialogTitle className="sr-only">navigation side bar</DialogTitle>
        <nav className="flex flex-col  justify-center h-full">
          <SheetClose asChild>
            <Link href="/" className={`${isHome ? "text-2xl" : "text-lg"} transition-all`}>Home {isHome && "🔥"} </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about-me" className={`${isAboutMe ? "text-2xl" : "text-lg"} transition-all`}>About Me {isAboutMe && "🔥"}</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects" className={`${isProjects ? "text-2xl" : "text-lg"} transition-all`}>Projects {isProjects && "🔥"}</Link>
          </SheetClose>
        </nav>

      </SheetContent>
    </Sheet >
  );
}

export default NavBar;