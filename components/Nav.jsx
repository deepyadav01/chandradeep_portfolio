"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Clarity from '@microsoft/clarity';

const links = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "Resume",
    path: "/resume",
  },
  // {
  //   name: "Work",
  //   path: "/work",
  // },
  {
    name: "Contract",
    path: "/contract",
  },
];
const Nav = () => {
  const pathname = usePathname();
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Nav", "Nav");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent transition-all"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
