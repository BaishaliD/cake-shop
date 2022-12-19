import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Rate, Segmented, Divider } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import ProductSuggestion from "./ProductSuggestion";
import Carousel from "../../components/Carousel";
import Quantity from "../../components/Quantity";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.jpeg";
import {
  cupcakes,
  fetchProduct,
  fetchRandomList,
} from "../../database/Products";

export default function Product() {
  const [data, setData] = useState(null);
  const [price, setPrice] = useState();
  const [suggested, setSuggested] = useState(null); //You Might Also Like sections
  const [moreFlavour, setmoreFlavour] = useState(null); //More product from same flavour
  const [moreCategory, setmoreCategory] = useState(null); //More product from same category
  const [wishlisted, setWishlisted] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const product = fetchProduct(id);
    setData(product);

    const _suggested = fetchRandomList(4, id);
    setSuggested(_suggested);

    const _moreFlavour = fetchRandomList(4, id);
    setmoreFlavour(_moreFlavour);

    const _moreCategory = fetchRandomList(4, id);
    setmoreCategory(_moreCategory);
  }, [id]);

  return (
    <div className="pt-24 bg-secondary2">
      {data && (
        <div className="flex pb-16">
          <div className="w-3/5">
            <Carousel slides={data.images} />
          </div>
          <div className="w-2/5 p-8">
            <h3 className="text-accent1 font-thin">{data.desc}</h3>
            <h1 className="text-accent2 acme">{data.name}</h1>
            <h2 className="text-accent2">{data.minPrice}</h2>
            <div className="text-accent1 text-base flex items-end">
              <Rate
                style={{ color: "#815B5B", fontSize: "14px" }}
                allowHalf
                disabled
                defaultValue={data.rating}
              />
              <div className="px-2">({data.ratingNo})</div>
            </div>

            <div className="flex items-center my-4">
              <img src={data.eggless ? Veg : NonVeg} className="h-5 w-5 mr-2" />
              <span>{data.eggless ? "Eggless" : "Contains Egg"}</span>
            </div>

            {/* SELECT FLAVOUR START */}
            {Array.isArray(data.flavour) && (
              <div className="my-4 text-accent1">
                {data.flavour.length > 1 ? (
                  <>
                    <div>Select Flavour</div>
                    <div className="flex my-4 -ml-2">
                      {data.flavour.map((el, i) => (
                        <button
                          key={el}
                          className={`p-2 mx-2 rounded ${
                            i === 1
                              ? "text-secondary2 border border-accent1 bg-accent1"
                              : "bg-secondary2 border border-accent1 text-accent1 hover:shadow-md"
                          }`}
                        >
                          {el}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>Flavour : {data.flavour[0]}</div>
                )}
              </div>
            )}
            {/* SELECT FLAVOUR END */}

            {/* SELECT WEIGHT START */}
            {Array.isArray(data.weight) && (
              <div className="my-4 text-accent1">
                {data.weight.length > 1 ? (
                  <>
                    <div>Select Weight</div>
                    <div className="flex my-4 -ml-2">
                      {data.weight.map((el, i) => (
                        <button
                          key={el}
                          className={`p-2 mx-2 rounded ${
                            i === 1
                              ? "text-secondary2 border border-accent1 bg-accent1"
                              : "bg-secondary2 border border-accent1 text-accent1 hover:shadow-md"
                          }`}
                        >
                          {el}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>Weight : {data.weight[0]}</div>
                )}
              </div>
            )}
            {/* SELECT WEIGHT END */}

            <div className="my-4 flex justify-between items-center">
              <Quantity />
              <div
                className="pr-2"
                onClick={() => {
                  setWishlisted((prev) => !prev);
                }}
              >
                {wishlisted ? (
                  <div className="flex items-center">
                    <HeartFilled />{" "}
                    <span className="font-thin pl-1">Remove from Wishlist</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <HeartOutlined />{" "}
                    <span className="font-thin pl-1">Add to Wishlist</span>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full my-2 py-2 text-center bg-accent2 roboto font-thin text-secondary1 uppercase">
              Add To Cart
            </div>
            <div className="my-12">
              {data.info.map((text, idx) => (
                <p key={idx} className="text-accent1">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      {suggested && (
        <ProductSuggestion
          title="You May Also Like"
          list={suggested}
          bgColor="bg-primary1"
          textColor="text-accent1"
        />
      )}
      {moreFlavour && (
        <ProductSuggestion
          title="More Chocolate Cakes"
          list={moreFlavour}
          bgColor="bg-accent2"
          textColor="text-primary2"
        />
      )}
      {moreCategory && (
        <ProductSuggestion
          title="More Cupcakes"
          list={moreCategory}
          bgColor="bg-secondary2"
          textColor="text-accent1"
        />
      )}
    </div>
  );
}
