import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GalleryHome from "../components/GalleryHome";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col gap-10 ">
        <section className="relative  ">
          <div className="max-w-[1200px] m-auto">
            <Hero />
          </div>
          <div className="h-[85%] w-[15%] absolute bg-green-700 z-[20] top-0 right-0 sm:w-[8rem] lg:w-[35%]"></div>
        </section>
        <section className="relative">
          <div className="max-w-[1200px] m-auto">
            <AboutSection />
          </div>
        </section>
        <section className="max-w-[1200px] m-auto px-10">
          <MenuSection />
        </section>
        <section className="max-w-[1400px] m-auto">
          <GalleryHome />
        </section>
        <section className="max-w-[1200px] m-auto px-10">
          <ContactSection />
        </section>
      </div>
    </>
  );
};
export default Home;
