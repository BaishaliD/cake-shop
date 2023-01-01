import ProductCard2 from "../../components/ProductCard2";
import { Pagination } from "antd";
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery({ products }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
    const sliced = products.slice(0, 6);
    setProductList(sliced);
  }, []);

  const pageChanged = (p) => {
    setProductList(products.slice((p - 1) * 6, p * 6));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center">
        {productList &&
          productList.length > 0 &&
          productList.map((item) => (
            <ProductCard2
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.images[0]}
              price={item.minPrice}
              rating={item.rating}
            />
          ))}
      </div>
      {productList && productList.length > 0 && (
        <div className="w-full text-center my-8">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={6}
            total={productList && productList.length}
            onChange={pageChanged}
          />
        </div>
      )}
    </div>
  );
}
