"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Clarity from '@microsoft/clarity';

motion;

const Photo = () => {
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Photo", "Photo");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  return (
    <div className="w-full h-full relative">
      <motion.dev
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] xl:w-[498px] xl:h-[498px] xl:ml-8 rounded-full overflow-hidden z-10 mix-blend-lighten
          absolute"
        >
          <Image
            src="/chandradeep.png"
            fill
            alt="profile"
            className="object-cover rounded-full p-4"
            priority
            quality={100}
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[560px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/200/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.dev>
    </div>
  );
};

export default Photo;
