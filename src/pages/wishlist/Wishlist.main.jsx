import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { fetchWishlist, removeFromWishlist } from "../../../firebase";
import PageLoader from "../../components/PageLoader";

export default function Wishlist() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWishlist()
      .then((res) => {
        if (res && res.length > 0) {
          setList(res);
          setError(null);
        } else {
          setError("NO_WISHLIST");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("fetchWishlist ", err);
        if (err === "NO_LOGGED_IN_USER") {
          setError("NO_LOGGED_IN_USER");
        } else {
          setError("SOMETHING_WENT_WRONG");
        }
      });
  }, []);

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id)
      .then((res) => {
        if (res && res.length > 0) {
          setList(res);
          setError(null);
        } else {
          setError("NO_WISHLIST");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("removeFromWishlist ", err);
        if (err === "NO_LOGGED_IN_USER") {
          setError("NO_LOGGED_IN_USER");
        } else {
          setError("SOMETHING_WENT_WRONG");
        }
      });
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl text-gray-500">
        {error === "NO_WISHLIST" ? (
          <div className="text-center">
            <div>You have not wishlisted anything yet</div>
            <a href="/products">
              <div className="underline text-accent1">Add to wishlist</div>
            </a>
          </div>
        ) : error === "NO_LOGGED_IN_USER" ? (
          <div className="text-center">
            <div>Log in to view your Wishlist</div>
            <a href="/login">
              <div className="underline text-accent1">Login</div>
            </a>
          </div>
        ) : error === "SOMETHING_WENT_WRONG" ? (
          "Oops, seems like something is not right. We are working on fixing it."
        ) : null}
      </div>
    );
  }

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="pt-24 bg-secondary2 flex flex-col items-center">
      <h3 className="mt-8 text-accent1">
        <span> My Wishlist</span>{" "}
        {list && list.length > 0 && (
          <span className="font-thin">({list.length} items)</span>
        )}
      </h3>
      <div className="w-full flex justify-center flex-wrap">
        {list && list.length > 0 ? (
          list.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              wishlist={true}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              eggless={item.eggless}
            />
          ))
        ) : (
          <h4>You have no items in your Wishlist!</h4>
        )}
      </div>
    </div>
  );
}
