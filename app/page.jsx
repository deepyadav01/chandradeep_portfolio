import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
// import Clarity from '@microsoft/clarity';
import { clarity } from 'react-microsoft-clarity';

const Home = () => {
  const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Header", "header");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  clarity.init(projectId);

// Identify the user
clarity.identify('USER_ID', { userProperty: 'value' });

// Cookie consent
clarity.consent();

// Setup a custom tag
clarity.setTag('key', 'value');

// Upgrade session
clarity.upgrade('upgradeReason');

// Check if Clarity has been initialized before calling its methods
if (clarity.hasStarted()) {
  clarity.identify('USER_ID', { userProperty: 'value' });
}
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Product Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent"> Chandradeep Yadav</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and i am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                   justify-center items-center text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
