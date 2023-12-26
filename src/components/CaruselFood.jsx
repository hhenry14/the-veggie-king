import { useEffect, useState } from "react";

const CarruselFood = ({
  children: slides,
  autoSlide = false,
  autoSliderInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSliderInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        className={`flex transition-transform ease-out duration-500 w-[22rem] h-[22rem] lg:w-[30rem] lg:h-[30rem] `}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
};
export default CarruselFood;
