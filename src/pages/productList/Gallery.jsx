import ProductCard from "../../components/ProductCard";
import { Pagination } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { HeartOutlined } from "@ant-design/icons";

export default function Gallery({ products }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
    const sliced = products.slice(0, 12);
    setProductList(sliced);
  }, []);

  const pageChanged = (p) => {
    setProductList(products.slice((p - 1) * 12, p * 12));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center">
        {productList &&
          productList.length > 0 &&
          productList.map((item) => (
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
      {productList && productList.length > 0 && (
        <div className="w-full text-center my-8">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={6}
            total={products ? products.length : 0}
            onChange={pageChanged}
          />
        </div>
      )}
    </div>
  );
}
