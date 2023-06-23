import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../../firebase";
// import Filter from "./FilterComplex";
import Gallery from "./Gallery";
import PageLoader from "../../components/PageLoader";
import Filter from "./Filter";

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
        <div className="relative">
          {/* <div className="bg-secondary2 fixed top-24 w-screen z-[60]">
            <Filter />
          </div> */}
          <div className="min-h-full bg-secondary1 pt-4">
            <Gallery products={products} />
          </div>
        </div>
      )}
    </div>
  );
}
