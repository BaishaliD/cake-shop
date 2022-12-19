import { useNavigate } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

export default function ProductCard2({ id, name, image, price, rating }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className="acme flex flex-col justify-center items-center w-64 m-8 bg-white rounded-xl p-4 shadow-md hover:shadow-lg"
    >
      <div className="w-full h-60 relative overflow-hidden product-wrapper rounded-xl shadow-md">
        <img src={image} className="w-full h-full object-cover zoom" />
        <div className="absolute bottom-0 h-full w-full z-10 bg-primary1 flex justify-center items-center appear"></div>
      </div>
      <div className="w-full flex flex-col items-start my-4 text-accent1 text-xl">
        <div>{name}</div>
        <div className="w-full flex justify-between text-lg">
          <span>{price}</span>
          <span>
            <StarFilled /> {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="w-full mb-2 py-2 text-center bg-accent1 font-normal text-base text-secondary1 uppercase rounded-md">
        Add To Cart
      </div>
    </div>
  );
}
