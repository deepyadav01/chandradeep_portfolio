"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Clarity from '@microsoft/clarity';

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contract",
    path: "/contract",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const projectId = "ozjgblsi0g"
  Clarity.init(projectId);
  Clarity.identify("user-id", "deep"); // only custom-id is required
  Clarity.setTag("MobileNav", "MobileNav");
  Clarity.consent()
  Clarity.upgrade("reason");
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Chandradeep
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) =>{
                return(
                    <Link
                    href={link.path}
                    key={index}
                    className={`${
                        link.path ===pathname &&
                        "text-accent border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
      </SheetContent>
    </Sheet>
    // <div>MobileNav</div>
  );
};

export default MobileNav;
