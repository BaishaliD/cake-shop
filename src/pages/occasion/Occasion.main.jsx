import { useParams } from "react-router-dom";
import { OccassionsPage } from "../../database/StaticData";
import Gallery from "../../components/Gallery";
import Filter from "../../components/Filter";
import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase";
import PageLoader from "../../components/PageLoader";
import Image from "../../assets/about-us/happiness.webp";

export default function Occasion() {
  const { occasion } = useParams();
  const data = OccassionsPage[occasion];
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts("occasion", occasion).then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, [occasion]);

  return (
    <div className="pt-24">
      {!isLoading && data && products ? (
        <>
          <div
            className="parallax h-96 bg-[url('/about-us/cake.jpeg')]"
            // style={{
            //   backgroundImage: Image,
            // }}
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
          <div className="bg-secondary1">
            {/* <div className="bg-secondary2 w-screen pt-4">
              <Filter />
            </div> */}
            <div className="w-full min-h-full">
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
