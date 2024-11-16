"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Clarity from '@microsoft/clarity';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const projectId = "ozjgblsi0g"
  Clarity.init(projectId);
  Clarity.identify("user-id", "deep"); // only custom-id is required
  Clarity.setTag("pageTransition", "pageTransition");
  Clarity.consent()
  Clarity.upgrade("reason");
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.dev
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0,
            transition:{delay:1, duration:0.4, ease:"easeInOut"},
           }}
           className = "h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.dev>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
