"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import PopupHireForm from "./PopupHireForm";
// import Clarity from '@microsoft/clarity';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="pt-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* {logo} */}
        <Link href="/">
          <h1 className="test4xl font-semibold">
            Chandradeep <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* {desktop nav} */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {pathname !== '/contract' && (
            <Button onClick={() => setOpen(true)}>Hire me</Button>
          )}
        </div>
        {/* {mobile nav} */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#27272c] p-10 rounded-xl w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <PopupHireForm onSuccess={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
