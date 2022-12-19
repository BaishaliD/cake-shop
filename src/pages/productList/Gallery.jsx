import ProductCard2 from "../../components/ProductCard2";
import { Pagination } from "antd";
import { useState } from "react";
import { cupcakes } from "../../database/Products";

const list = cupcakes;

export default function Gallery() {
  const [products, setProducts] = useState(list.slice(0, 6));

  const pageChanged = (p) => {
    console.log("Page no. ", p);
    console.log("LISTT :: ", list.slice((p - 1) * 6, p * 6));
    setProducts(list.slice((p - 1) * 6, p * 6));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center">
        {products.map((item) => (
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
      <div className="w-full text-center my-8">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          total={14}
          onChange={pageChanged}
        />
      </div>
    </div>
  );
}
