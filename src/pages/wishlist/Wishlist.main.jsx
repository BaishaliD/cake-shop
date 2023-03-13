import { useEffect } from "react";
import { useState } from "react";
import { fetchRandomList } from "../../../firebase";
import ProductCard from "../../components/ProductCard";

export default function Wishlist() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchRandomList(10)
      .then((res) => setList(res))
      .catch((e) => console.log("Wishlist fetch API error ", e));
  }, []);

  const removeFromWishlist = (id) => {
    console.log("REMOVE FROM WISHLIST : ", id);
    let _index = list.findIndex((item) => item.id === id);
    list.splice(_index, 1);
    console.log("LIST :: ", list);
    setList(list);
  };

  return (
    <div className="pt-24 bg-secondary2 flex flex-col items-center">
      <h3 className="mt-8 text-accent1">
        My Wishlist ({list ? list.length : 0} items)
      </h3>
      <div className="w-full flex justify-center flex-wrap">
        {list && list.length > 0 ? (
          list.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.images && item.images[0]}
              price={item.minPrice}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              wishlist={true}
              eggless={item.eggless}
              buttonText="Move to Cart"
              removeFromWishlist={removeFromWishlist}
            />
          ))
        ) : (
          <h4>You have no items in your Wishlist!</h4>
        )}
      </div>
    </div>
  );
}
