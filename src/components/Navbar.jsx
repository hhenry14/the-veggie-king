import { NavLink } from "react-router-dom";
import logoIcon from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/close-menu-icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="flex  items-center justify-between p-4  max-w-[1200px] m-auto lg:py-3 lg:px-10">
        <div>
          <NavLink to="/" onClick={() => setMenu(false)}>
            <img src={logoIcon} alt="logo" />
          </NavLink>
        </div>
        <ul
          className={`${
            !menu && "hidden sm:flex"
          } p-8 absolute flex flex-col justify-center items-center gap-5 bg-gray-50 top-[4.4rem] right-0 w-full z-[1000] sm:flex-row sm:static sm:justify-end  sm:p-0 sm:bg-transparent`}
        >
          <NavLink
            to="/"
            onClick={() => setMenu(false)}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <p className="  py-4 px-8 sm:p-2 rounded-xl  hover:scale-110 hover:font-bold">
              Home
            </p>
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenu(false)}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <p className=" py-4 px-8 sm:p-2  rounded-xl  hover:scale-110 hover:font-bold">
              About
            </p>
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setMenu(false)}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <p className=" py-4 px-8 sm:p-2  rounded-xl  hover:scale-110 hover:font-bold">
              Menu
            </p>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenu(false)}
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <p className=" py-4 px-8 sm:p-2  rounded-xl  hover:scale-110 hover:font-bold">
              Contact
            </p>
          </NavLink>
        </ul>
        <div className="sm:hidden">
          <button onClick={() => setMenu(!menu)}>
            {menu ? (
              <img src={closeMenuIcon} alt="" />
            ) : (
              <img src={MenuIcon} alt="" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
