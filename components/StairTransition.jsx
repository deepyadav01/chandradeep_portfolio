"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
// import Clarity from '@microsoft/clarity';
//components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("StairTransition", "StairTransition");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 right-0
            pointer-events-none z-40 flex">
                <Stairs/>
            </div>
            <motion.div 
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            inital = {{opacity: 1}}
            animate = {{
                opacity :0,
                transition:{
                    delay:1,
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
            />
        </div>
        </AnimatePresence>
    </>
  );
};

export default StairTransition;
