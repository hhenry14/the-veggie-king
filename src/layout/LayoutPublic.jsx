import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <div className=" h-screen">
      <div className="relative z-[2000] shadow-2xl">
        <Navbar />
      </div>

      <menu className="">
        <Outlet />
      </menu>
      <div className="bg-gray-300 mt-10 ">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPublic;
