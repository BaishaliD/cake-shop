import { useNavigate, useLocation, Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import Image from "../components/Image";
import Veg from "../assets/icons/veg.png";
import NonVeg from "../assets/icons/nonveg.jpeg";

export default function ProductCard({
  id,
  name,
  image,
  price,
  discountedPrice,
  eggless,
  rating,
  wishlist,
  buttonText,
  removeFromWishlist,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Link to={`/product/${id}`} state={{ from: location.pathname }}>
      <div className="acme flex flex-col justify-center items-center w-64 min-w-[240px] m-4 lg:m-8 bg-white rounded-xl p-4 shadow-md hover:shadow-lg">
        <div className="w-full h-60 relative overflow-hidden product-wrapper rounded-xl shadow-md cursor-pointer">
          <img
            src={eggless ? Veg : NonVeg}
            className="h-5 w-5 absolute right-2 top-2 z-50"
          />
          <Image
            height="100%"
            width="100%"
            src={image}
            className="cover zoom"
          />
          <div className="absolute bottom-0 h-full w-full z-10 bg-primary1 flex justify-center items-center appear"></div>
        </div>
        <div className="w-full flex flex-col items-start my-4 text-accent1 text-xl">
          <div>{name}</div>
          <div className="w-full flex justify-between text-lg">
            {discountedPrice ? (
              <div className="flex items-center">
                <span>{discountedPrice}</span>
                <span className="text-gray-400 line-through ml-2 text-base">
                  {price}
                </span>
              </div>
            ) : (
              <span>{price}</span>
            )}
            {rating && rating > 0 ? (
              <span>
                <StarFilled /> {parseInt(rating).toFixed(1)}
              </span>
            ) : null}
          </div>
        </div>

        <div
          className="w-full mb-2 py-2 text-center bg-accent1 font-normal text-base text-secondary1 uppercase rounded-md cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {buttonText}
        </div>

        {wishlist && (
          <div
            className="roboto text-gray-400 underline font-normal text-sm pt-2 cursor-pointer"
            onClick={() => removeFromWishlist(id)}
          >
            Remove from Wishlist
          </div>
        )}
      </div>
    </Link>
  );
}
