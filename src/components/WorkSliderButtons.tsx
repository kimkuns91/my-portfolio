'use client';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

import { useSwiper } from 'swiper/react';

// WorkSliderButtons
interface WorkSliderButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles?: string;
}

const WorkSliderButtons: React.FC<WorkSliderButtonsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
