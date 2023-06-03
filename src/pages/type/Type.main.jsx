import { Divider } from "antd";
import { useParams } from "react-router-dom";
import { TypesPage } from "../../database/StaticData";
import Gallery from "../../components/Gallery";
import Filter from "../../components/Filter";
import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase";
import PageLoader from "../../components/PageLoader";

export default function Type() {
  const { type } = useParams();
  const data = TypesPage[type];
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts("type", type).then((data) => {
      console.log("DATA IN COMPONENT :: ", data);
      setProducts(data);
      setIsLoading(false);
    });
  }, [type]);

  useEffect(() => {}, []);
  return (
    <div className="pt-24">
      {!isLoading && data ? (
        <>
          <div className="flex min-h-screen">
            <div className="w-1/5 min-h-full bg-primary1">
              <Filter />
            </div>
            <div className="w-4/5 min-h-full bg-secondary1">
              <div className="pt-8 text-accent1 w-full text-center text-4xl font-bold">
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
