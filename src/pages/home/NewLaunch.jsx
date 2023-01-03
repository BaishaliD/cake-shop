import { useState, useEffect, useRef } from "react";
import { Carousel, Rate } from "antd";
import { fetchRandomList } from "../../../firebase";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Image from "../../components/Image";

export default function NewLaunch() {
  const ref = useRef(null);
  const [list, setList] = useState(null);
  useEffect(() => {
    fetchRandomList(3).then((list) => setList(list));
  }, []);

  return (
    <div className="my-8 py-8">
      <div className="acme text-4xl text-accent1 text-center mb-4">
        See what our customers love!
      </div>
      <div className="w-full m-auto flex justify-center text-roboto">
        <div className="flex items-center">
          <LeftCircleOutlined
            className="text-5xl text-accent1"
            onClick={() => {
              ref.current.prev();
            }}
          />
        </div>
        <div className="w-2/3 h-96">
          <Carousel ref={ref} effect="fade" dots={false}>
            {list &&
              list.map((item) => (
                <div
                  key={item.id}
                  className="h-96 w-full rounded-xl overflow-hidden p-4"
                >
                  <div className="flex w-full h-full">
                    <Image
                      width={"50%"}
                      height={"100%"}
                      className="rounded-l-xl object-cover"
                      src={item.images[0]}
                    />
                    <div className="w-1/2 flex flex-col justify-center items-center bg-white20 text-accent1 p-8 rounded-r-xl">
                      <div className="text-3xl text-accent2 acme">
                        {item.name}
                      </div>
                      <div className="text-accent1 text-base flex items-end">
                        <Rate
                          style={{ color: "#815B5B", fontSize: "14px" }}
                          allowHalf
                          disabled
                          defaultValue={item.rating}
                        />
                        <div className="px-2">({item.ratingNo})</div>
                      </div>
                      <div className="text-2xl text-accent1 my-4">
                        {item.minPrice}
                      </div>
                      <div className="text-center">
                        {
                          "By default, Tailwind provides five border-width utilities, and the same number of utilities per side (horizontal, vertical, top, right, bottom, and left)."
                        }
                      </div>
                      <div className="my-4 py-2 px-8 text-center bg-accent1 text-primary1 rounded-md">
                        Buy Now
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
        <div className="flex items-center">
          <RightCircleOutlined
            className="text-5xl text-accent1"
            onClick={() => {
              ref.current.next();
            }}
          />
        </div>
      </div>
    </div>
  );
}
