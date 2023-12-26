import iconClock from "../assets/icons/time-icon.svg";
import iconMap from "../assets/icons/map-icon.svg";
import iconPhone from "../assets/icons/phone-icon.svg";
const ContactSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-centers mb-3">
        <section>
          <h2 className="text-yellow-500 font-bold text-center">Contact</h2>
          <h3 className="text-2xl font-bold">We're waiting for you!</h3>
        </section>
        <section className="flex flex-col  justify-center items-center gap-4 sm:flex-row sm:flex-wrap">
          <article className="flex flex-col justify-center items-center shadow-md rounded-full px-10 py-4 border w-[300px]">
            <img src={iconClock} alt="icon clock" />
            <p className="font-bold">Today 12 pm - 9 pm</p>
            <span>Working Hours</span>
          </article>
          <article className="flex flex-col justify-center items-center shadow-md rounded-full px-10 py-4 border w-[300px]">
            <img src={iconMap} alt="icon map" />
            <p className="font-bold">Today 12 pm - 9 pm</p>
            <span>Working Hours</span>
          </article>
          <article className="flex flex-col justify-center items-center shadow-md rounded-full px-10 py-4 border w-[300px]">
            <img src={iconPhone} alt="icon phone" />
            <p className="font-bold">Today 12 pm - 9 pm</p>
            <span>Working Hours</span>
          </article>
        </section>
      </div>
    </>
  );
};
export default ContactSection;
