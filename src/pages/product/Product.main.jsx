import { useState } from "react";
import { Button, Rate, Segmented, Divider } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Carousel from "../../components/Carousel";
import Quantity from "../../components/Quantity";
import Accordion from "./Accordion";

export default function Product() {
  const [value, setValue] = useState("Small(80gm)");
  const [wishlisted, setWishlisted] = useState(true);
  return (
    <div className="pt-24 bg-secondary2">
      <div className="flex">
        <Carousel />
        <div className="w-1/2 p-8">
          <h3 className="text-accent1 font-thin">Coffee Collection</h3>
          <h1 className="text-accent2">The Little Prince Soap Bar</h1>
          <div className="text-accent1 text-base flex items-end">
            <Rate
              style={{ color: "#815B5B", fontSize: "14px" }}
              allowHalf
              disabled
              defaultValue={3.5}
            />
            <div className="px-2">(23)</div>
          </div>
          <div className="my-4">
            <div>Select size</div>
            <div className="my-2">
              <Segmented
                options={["Small(80gm)", "Large(250gm)"]}
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
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
          <Accordion />
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
}
