"use client"
import { DialogTitle } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const NavBar = () => {
  const pathname = usePathname();
  const params = useParams()
  const langPrefix = `/${params.locale}`


  const isHome = pathname === langPrefix;
  const isAboutMe = pathname === langPrefix + "/about-me";
  const isProjects = pathname === langPrefix + "/projects";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="size-20" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <DialogTitle className="sr-only">navigation side bar</DialogTitle>
        <nav className="flex flex-col justify-center h-full space-y-2">
          <SheetClose asChild>
            <Link href="/" className={`${isHome ? "text-2xl" : "text-lg"} transition-all`}>
              Home {isHome && "🔥"}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about-me" className={`${isAboutMe ? "text-2xl" : "text-lg"} transition-all`}>
              {langPrefix === "/pt" ? "Sobre mim" : "About me"}
              {isAboutMe && "🔥"}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects" className={`${isProjects ? "text-2xl" : "text-lg"} transition-all`}>
              {langPrefix === "/pt" ? "Projetos" : "Projects"}
              {isProjects && "🔥"}
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet >
  );
}

export default NavBar;