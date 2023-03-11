import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { OccassionsPage } from "../../database/StaticData";
import Gallery from "../../components/Gallery";
import Filter from "../../components/Filter";
import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase";

export default function Occasion() {
  const { occasion } = useParams();
  const data = OccassionsPage[occasion];
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts("occasion", occasion).then((data) => {
      console.log("DATA IN COMPONENT :: ", data);
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="pt-24">
      {!isLoading && data ? (
        <>
          <div
            className={`parallax h-96`}
            style={{
              backgroundImage: `url(/src/assets/occasion/${data.image})`,
            }}
          >
            <div className="h-full w-full flex flex-col items-center justify-center text-primary1 roboto font-bold bg-black50 px-16 py-4">
              <div className="mb-6 text-6xl opacity-100 acme text-center">
                {data.title}
              </div>
              <div className="mb-6 text-4xl opacity-100 text-center">
                {data.subtitle}
              </div>
            </div>
          </div>
          <div className="flex min-h-screen">
            <div className="w-1/5 min-h-full bg-primary1">
              <Filter />
            </div>
            <div className="w-4/5 min-h-full bg-secondary1">
              <Gallery products={products} />
            </div>
          </div>
        </>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}
