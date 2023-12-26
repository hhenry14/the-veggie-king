import CardMenuSection from "./CardMenuSection";

const icons = [
  {
    id: 3,
    foto: "src//assets/images/menu-section-mighty-burger.png",
    title: "Mighty burger",
  },
  {
    id: 1,
    foto: "src//assets/images/menu-section-chickpae-salad.png",
    title: "Chiskpae's salad",
  },
  {
    id: 2,
    foto: "src//assets/images/menu-section-chickpae-wrap.png",
    title: "Chiskpae's Wrap",
  },
];
const MenuSection = () => {
  return (
    <>
      <div className=" flex flex-col gap-10 p-4 ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-yellow-500">Menu</h2>
          <h3 className="text-xl font-bold">Explore our best food</h3>
          <p>Below you can see our vest selling meals</p>
        </div>
        <div className="flex flex-col gap-7 sm:flex-row ">
          {icons.map((card) => (
            <CardMenuSection key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MenuSection;
