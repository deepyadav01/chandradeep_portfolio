"use client";

import CountUp from "react-countup";
// import Clarity from '@microsoft/clarity';

const stats = [
  {
    num: 7,
    text: "Year of experience",
  },
  {
    num: 15,
    text: "Project completed",
  },
  // {
  //   num: 12,
  //   text: "Technologies mastered",
  // },
  // {
  //   num: 500,
  //   text: "code commits",
  // },
];

const Stats = () => {
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Stats", "Stats");
  // Clarity.consent()
  // Clarity.upgrade("reason");
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ num, text }, index) => {
            return (<div key={index} className="flex-1 flex gap-4 items-center justify-center
            xl:justify-start">
              <CountUp
                end={num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${text.length <15 ? "max-w-[100px]":"max-w-[150px]"}
               leading-snug text-white/80`}>{text}</p>
            </div>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
