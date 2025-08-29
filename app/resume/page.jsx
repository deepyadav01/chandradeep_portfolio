"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaAngular,
  FaPython
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "about me",
  description:
    "I possess 6+ years of Developer experience in Full Stack Development, looking for a challenging role in an organization, where I can learn and use my technical skills to fulfil the company assignments, and products and deliver high-performance applications as expected by the client.",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Chandradeep Yadav",
    },
    {
      fieldName: "Phone",
      FieldValue: "+91-8860145039",
    },
    {
      fieldName: "Experience",
      FieldValue: "6+ Years",
    },
    {
      fieldName: "Skype",
      FieldValue: "deep.yadav01",
    },
    {
      fieldName: "Nationality",
      FieldValue: "Indian",
    },
    {
      fieldName: "Email",
      FieldValue: "chandradeepyadav2@gmail.com",
    },
    {
      fieldName: "Freelance",
      FieldValue: "Available",
    },
    {
      fieldName: "Language",
      FieldValue: "Hindi, English",
    },
  ],
};

//experience data
const experience = {
  icon: "/bedge.png",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium saepe pariatur, ab dolor porro, sed aliquid quasi laudantium nisi suscipit! Officia voluptas est voluptatum exercitationem placeat temporibus eveniet? Minima.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Web Design",
      position: "Full Stack Developer",
      duration: "summer -2022",
    },
    {
      company: "E-commerce Startup.",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
    },
    {
      company: "Tech Academy",
      position: "Front-end Developer",
      duration: "2018 - 2020",
    },
  ],
};
const education = {
  icon: "/bedge.png",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium saepe pariatur, ab dolor porro, sed aliquid quasi laudantium nisi suscipit! Officia voluptas est voluptatum exercitationem placeat temporibus eveniet? Minima.",
  items: [
    {
      institution: "BBD NITEM",
      degree: "B.Tech",
      duration: "2012- 2016 ",
    },
    {
      institution: "SAV Inter Collage",
      degree: "Intermediate",
      duration: "2010",
    },
    {
      institution: "Tech Solution Inc.",
      degree: "High School",
      duration: "2008 ",
    },
  ],
};
const skills = {
  icon: "/bedge.png",
  title: "My skills",
  description:"",
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium saepe pariatur, ab dolor porro, sed aliquid quasi laudantium nisi suscipit! Officia voluptas est voluptatum exercitationem placeat temporibus eveniet? Minima.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[240px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[240px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skill */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.FieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
