import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../../../firebase";
import Filter from "./Filter";
import Gallery from "./Gallery";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData("category", "Cupcake").then((data) => {
      console.log("DATA IN PRODUCT LIST PAGE :: ", data);
      setProducts(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="pt-24">
      <div className="flex min-h-screen">
        <div className="w-1/5 min-h-full bg-primary1">
          <Filter />
        </div>
        {isLoading ? (
          <h1>Data is loading.....</h1>
        ) : (
          <div className="w-4/5 min-h-full bg-secondary1">
            <Gallery products={products} />
          </div>
        )}
      </div>
    </div>
  );
}
