const CartMenuSection = ({ card }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-xl">
      <img src={card.foto} alt="" className="object-contain" />
      <div className="p-4">
        <h2 className="text-xl font-semibold pb-4"> {card.title}</h2>
        <span>Served with fries and drink</span>
      </div>
    </div>
  );
};
export default CartMenuSection;
