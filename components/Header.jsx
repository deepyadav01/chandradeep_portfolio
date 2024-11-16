import Link from "next/link";
import { Button } from "./ui/button";
// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Clarity from '@microsoft/clarity';

const Header = () => {
  const projectId = "ozjgblsi0g"
  Clarity.init(projectId);
  Clarity.identify("user-id", "deep"); // only custom-id is required
  Clarity.setTag("Header", "header");
  Clarity.consent()
  Clarity.upgrade("reason");
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
