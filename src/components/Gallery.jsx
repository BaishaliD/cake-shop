import ProductCard from "./ProductCard";
import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

export default function Gallery({ products }) {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProductList(products);
    const sliced = products.slice(0, 6);
    setProductList(sliced);
  }, [products]);

  const pageChanged = (p) => {
    setProductList(products.slice((p - 1) * 6, p * 6));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      {productList && productList.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center">
            {productList.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.images && item.images[0]}
                price={item.minPrice}
                discountedPrice={item.discountedPrice}
                rating={item.rating}
                eggless={item.eggless}
              />
            ))}
          </div>
          <div className="w-full text-center my-8">
            <Pagination
              defaultCurrent={1}
              defaultPageSize={6}
              total={products ? products.length : 0}
              onChange={pageChanged}
            />
          </div>
        </>
      ) : (
        <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
          We apologize, but we are currently out of stock for this collection.
          <br />
          Please check back with us soon, or browse our selection of other
          delicious cakes.
          <div
            className="cursor-pointer underline text-accent1 mt-4"
            onClick={() => navigate("/products")}
          >
            Browse more cakes
          </div>
        </div>
      )}
    </div>
  );
}
