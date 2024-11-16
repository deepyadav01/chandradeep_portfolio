"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Clarity from '@microsoft/clarity';

const WorkSliderBtns = ({ containerStyles, btnStyles, IconStyles }) => {
  const projectId = "ozjgblsi0g"
  Clarity.init(projectId);
  Clarity.identify("user-id", "deep"); // only custom-id is required
  Clarity.setTag("Worksliderbtns", "Worksliderbtns");
  Clarity.consent()
  Clarity.upgrade("reason");
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={IconStyles}></PiCaretLeftBold>
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={IconStyles}></PiCaretRightBold>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
