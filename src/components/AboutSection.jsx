import imagenFood from "../assets/images/about-us-section-food.png";
const AboutSection = () => {
  return (
    <>
      <div className="grid  justify-center  relative px-4 h-[350px] sm:h-auto sm:grid-cols-2  sm:items-center sm:gap-20 ">
        <section className="flex flex-col gap-4  pr-24   sm:pr-2 sm:order-1">
          <h2 className="text-yellow-300 font-bold">About us</h2>
          <h3 className="text-xl font-bold">Few words about us</h3>
          <p className="">
            we are nor ardinaty food truck. We acreate a place averflowing with
            positive energy thar it expresses inportat to <br />
            us vlaues . Get to know them <br /> specifically
          </p>
        </section>
        <section className=" absolute z-[100]   w-[200px] bottom-0 -right-14 sm:relative lg:h-96 lg:w-96 ">
          <img
            src={imagenFood}
            alt="Food "
            className="object-contain w-[20rem] h-[20rem]"
          />
        </section>
        <div className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full absolute bg-green-700 z-[20] top-10 -right-56  sm:top-3 sm:-left-20 lg:-top-20 lg:-left-40"></div>
      </div>
    </>
  );
};
export default AboutSection;
