import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../../firebase";
import Filter from "./Filter";
import Gallery from "./Gallery";
import PageLoader from "../../components/PageLoader";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="pt-24">
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="flex min-h-screen">
          <div className="w-1/5 min-h-full bg-primary1">
            <Filter />
          </div>
          <div className="w-4/5 min-h-full bg-secondary1">
            <Gallery products={products} />
          </div>
        </div>
      )}
    </div>
  );
}
