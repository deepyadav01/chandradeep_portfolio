import { animate, motion } from "framer-motion";
// import Clarity from '@microsoft/clarity';

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index for staggred delay

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Stairs", "Stairs");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  return <>
      {/* render 6 motion devs, each representing a step of the stairs, 
   Each div will have the some animation defined by the stairAnimation oject,
   the delay for each dev is calculated sinamically based on it's reveresed index, 
   creating a stahhered effect with decreasing delay for each subsequent step. */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.dev
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
};

export default Stairs;
