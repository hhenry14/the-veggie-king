import iconMoreInformation from "../assets/icons/check-menu-icon.svg";
import CarruselFood from "./CaruselFood";

import heroSection from "../assets/images/hero-section-food.png";

const slides = [
  "src//assets/images/hero-section-slide-food-1.png",
  "src//assets/images/hero-section-slide-food-2.png",
  "src//assets/images/hero-section-slide-food-3.png",
  "src//assets/images/hero-section-slide-food-4.png",
];
const Hero = () => {
  return (
    <>
      <div className=" grid  justify-start items-center  relative h-screen    md:gap-10 md:justify-center md:items-center lg:grid-cols-2 lg:gap-0  lg:px-10  ">
        {/* information */}
        <div className="p-4 flex flex-col justify-start gap-7  pr-16 relative -top-24 sm:pr-32 lg:pr-0">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Healthy & Fresh Food For You
          </h1>
          <h3 className="text-gray-600 text-lg pr-7 sm:pr-28">
            Croweded for knows of healtly, delicious and non-obvious food
          </h3>
          <button className="flex  gap-3 p-3 bg-orange-400 rounded-lg px-4 mr-auto ">
            <span>Check more </span>
            <img src={iconMoreInformation} alt="check more" />
          </button>
        </div>

        {/* carussel */}
        <div className="absolute -right-64 top-20 z-[100] sm:-right-32 sm:top-40  lg:relative lg:right-0 lg:top-0  lg:m-auto">
          <CarruselFood autoSlide={true} autoSliderInterval={3000}>
            {slides.map((food) => (
              <img
                src={food}
                key={food}
                className=" relative z-[500] object-contain"
                alt="Food veggie"
              />
            ))}
          </CarruselFood>
        </div>
        <div className="absolute bottom-0 left-0 w-[150px] ">
          <img src={heroSection} alt="chile" className="object-contain" />
        </div>
      </div>
    </>
  );
};
export default Hero;
