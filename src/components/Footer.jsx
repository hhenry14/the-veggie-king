import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import iconTwitter from "../assets/icons/twitter-icon.svg";
import iconFacebook from "../assets/icons/facebook-icon.svg";
import iconInstagram from "../assets/icons/instagram-icon.svg";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col p-4 max-w-[1200px] m-auto">
        <div className="grid  gap-6 pb-6 sm:grid-cols-3 ">
          <section>
            <img src={logo} alt="logo" />
          </section>
          <section className="flex flex-col justify-around font-bold lg:flex-row">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/menu"> MENU</Link>
            <Link to="/contact">CONTACT</Link>
          </section>
          <section className="flex flex-col gap-5">
            <h2>
              stay up to date with ort new opennings upcoming events seasonal
              specials and promotions. Check our social
            </h2>
            <div className="flex gap-5">
              <img src={iconTwitter} alt="icon twitter" />
              <img src={iconFacebook} alt="icon facebook" />
              <img src={iconInstagram} alt="icon instagram" />
            </div>
          </section>
        </div>
        <div className="py-4 border-t-2 border-gray-400 md:text-center">
          <p>© 2023 the veggie king</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
