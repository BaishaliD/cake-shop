import { useNavigate, useLocation, Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import Image from "../components/Image";
import Veg from "../assets/icons/veg.png";
import NonVeg from "../assets/icons/nonveg.jpeg";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addToWishlist, removeFromWishlist } from "../../firebase";
import { useState } from "react";

export default function ProductCard({
  id,
  name,
  image,
  price,
  discountedPrice,
  eggless,
  rating,
  wishlist,
  handleRemoveFromWishlist = () => {},
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [wishlisted, setWishlisted] = useState(wishlist);

  return (
    <Link to={`/product/${id}`} state={{ from: location.pathname }}>
      <div className="show-btn relative overflow-hidden acme flex flex-col justify-center items-center w-64 min-w-[240px] min-h-[360px] m-4 lg:m-8 bg-white rounded-xl p-4 shadow-md hover:shadow-lg cursor-pointer">
        {wishlist && (
          <div className="card-btn roboto absolute h-full w-full bg-white50 z-[60] flex flex-col items-center justify-center">
            <div
              className="p-2 text-white bg-accent1 mb-4 w-[100px] text-center"
              style={{ border: "1px solid #815B5B" }}
            >
              View
            </div>
            <div
              className="p-2 bg-white text-accent1 w-[100px] text-center"
              style={{ border: "1px solid #815B5B" }}
              onClick={(e) => {
                e.preventDefault();
                handleRemoveFromWishlist(id);
              }}
            >
              Remove
            </div>
          </div>
        )}
        <div className="w-full h-60 relative overflow-hidden product-wrapper rounded-xl shadow-md">
          <img
            src={eggless ? Veg : NonVeg}
            className="h-5 w-5 absolute right-2 top-2 z-50"
          />
          {rating && rating > 0 ? (
            <span className="p-1 absolute left-2 top-2 z-50 flex items-center bg-green-100 text-green-700 rounded">
              <StarFilled className="mr-1" /> {parseInt(rating).toFixed(1)}
            </span>
          ) : null}
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
          </div>
        </div>

        {!wishlist && (
          <div className="card-btn w-full p-4 bg-white shadow-[0px_-5px_10px_#d2d2d2]">
            <div
              className="w-full py-2 text-center text-accent1 bg-primary1 font-normal text-base uppercase rounded-md cursor-pointer"
              style={{ border: "1px solid #815B5B" }}
              onClick={(e) => {
                e.preventDefault();
                addToWishlist({
                  id,
                  name,
                  image,
                  price,
                  discountedPrice: discountedPrice ? discountedPrice : null,
                  eggless,
                  rating: rating ? rating : null,
                })
                  .then(() => {
                    setWishlisted(true);
                  })
                  .catch((err) => {
                    console.log("addToWishlist error ", err);
                  });
              }}
            >
              {wishlisted ? (
                <HeartFilled className="pr-4" />
              ) : (
                <HeartOutlined className="pr-4" />
              )}
              <span>Wishlist</span>
            </div>
          </div>
        )}

        {/* {wishlist && (
          <div
            className="roboto text-gray-400 underline font-normal text-sm pt-2 cursor-pointer"
            onClick={() => removeFromWishlist(id)}
          >
            Remove from Wishlist
          </div>
        )} */}
      </div>
    </Link>
  );
}
