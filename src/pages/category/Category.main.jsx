import { Divider } from "antd";
import { useParams } from "react-router-dom";
import { CategoryPage } from "../../database/StaticData";
import Gallery from "../../components/Gallery";
import Filter from "../../components/Filter";
import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase";
import PageLoader from "../../components/PageLoader";

export default function Category() {
  const { cat } = useParams();
  const data = CategoryPage[cat];
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts("category", cat).then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, [cat]);
  return (
    <div className="pt-24">
      {!isLoading && data ? (
        <>
          <div className="flex min-h-screen bg-secondary1 relative">
            {/* <div className="bg-secondary2 fixed top-24 w-screen z-[60]">
              <Filter />
            </div> */}
            <div className="w-full min-h-full pt-0">
              <div className="pt-8 text-accent1 w-full text-center text-2xl font-bold">
                {data.title}
              </div>
              <Divider />
              <Gallery products={products} />
            </div>
          </div>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
}
