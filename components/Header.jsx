import Link from "next/link";
import { Button } from "./ui/button";
// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
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
          <Link href="/contract">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
