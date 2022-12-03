import FruitPunch from "../assets/fruit-punch.jpg";

export default function ProductCard({ id, name, image, price }) {
  return (
    <div className="flex flex-col justify-center items-center w-56 mx-8">
      <div className="w-full h-60 relative overflow-hidden product-wrapper">
        <img src={image} className="w-full h-full zoom" />
        <div className="absolute bottom-0 h-full w-full z-10 bg-primary1 flex justify-center items-center appear"></div>
      </div>
      <div className="w-full my-2 py-2 text-center bg-accent2 roboto font-thin text-secondary1 uppercase">
        Add To Cart
      </div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}
