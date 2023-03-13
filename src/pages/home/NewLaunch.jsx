import { useState, useEffect, useRef } from "react";
import { Carousel, Rate } from "antd";
import {
  fetchRandomList,
  getAllProducts,
  getRandomProducts,
} from "../../../firebase";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Image from "../../components/Image";
import { useWindowSize } from "../../Hooks";
import { Link } from "react-router-dom";

export default function NewLaunch() {
  const [width] = useWindowSize();
  const ref = useRef(null);
  const [list, setList] = useState(null);
  useEffect(() => {
    getRandomProducts(3).then((res) => {
      console.log("getRandomProducts response :: ", res);
      setList(res);
    });
  }, []);

  return (
    <div className="mb-8">
      <div className="acme text-4xl text-accent1 text-center mb-4">
        See what our customers love!
      </div>
      <div className="w-full m-auto flex justify-center text-roboto">
        <div className="flex items-center">
          <LeftCircleOutlined
            className="pr-1 sm:pr-4 text-3xl sm:text-5xl text-accent1"
            onClick={() => {
              ref.current.prev();
            }}
          />
        </div>
        <div className="w-4/5 sm:w-2/3 h-96">
          <Carousel ref={ref} effect="fade" dots={false}>
            {list &&
              list.map((item) => (
                <Link to={`/product/${item.id}`}>
                  <div
                    key={item.id}
                    className="h-96 w-full rounded-xl overflow-hidden"
                  >
                    <div className="flex w-full h-full">
                      <Image
                        width={width > 640 ? "50%" : "100%"}
                        height={"100%"}
                        className="rounded-r-xl sm:rounded-r-none rounded-l-xl overflow-hidden cover relative"
                        src={item.images && item.images[0]}
                      />
                      <div className="absolute bottom-0 sm:static bg-gradient-to-t from-black to-black20 sm:bg-none sm:bg-white20 h-full w-full sm:w-1/2 flex flex-col justify-end sm:justify-center items-center text-primary1 sm:text-accent1 p-2 rounded-b-xl sm:rounded-b-none sm:rounded-r-xl">
                        <div className="text-3xl text-primary1 sm:text-accent2 acme">
                          {item.name}
                        </div>
                        <div className="text-primary1 sm:text-accent1 text-base items-end hidden sm:flex">
                          <Rate
                            style={{ color: "#815B5B", fontSize: "14px" }}
                            allowHalf={true}
                            disabled
                            value={item.rating}
                          />
                          <div className="px-2">({item.ratingNo})</div>
                        </div>
                        <div className="text-2xl text-primary1 sm:text-accent1 my-4">
                          {item.minPrice}
                        </div>
                        <div className="text-center">{item.desc}</div>
                        <div className="my-4 py-2 px-8 text-center bg-accent1 text-primary1 rounded-md cursor-pointer">
                          Buy Now
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Carousel>
        </div>
        <div className="flex items-center">
          <RightCircleOutlined
            className="pl-1 sm:pl-4 text-3xl sm:text-5xl text-accent1"
            onClick={() => {
              ref.current.next();
            }}
          />
        </div>
      </div>
    </div>
  );
}
