import React, { useState, useRef } from "react";
import { Button, Carousel, Input, Rate } from "antd";
const { TextArea } = Input;
import UploadImages from "./UploadImages";

const ratingList = [
  { rating: 5, desc: "It was extrordinary" },
  { rating: 4, desc: "It was great" },
  { rating: 3, desc: "It was okay" },
  { rating: 2, desc: "It was not good" },
  { rating: 1, desc: "It was terrible" },
];

export default function AddReview() {
  const ref = useRef(null);
  return (
    <div>
      <Carousel dots={false} ref={ref} effect="fade">
        <div className="my-8">
          {ratingList.map((item) => (
            <div className="flex p-2 border w-full pl-16 justify-start my-2 hover:bg-gray-200 cursor-pointer">
              <Rate
                style={{ color: "#815B5B", fontSize: "14px" }}
                disabled
                defaultValue={item.rating}
              />
              <div className="pl-8 ">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="my-8">
          <h2>Write a review</h2>
          <Input placeholder="Add a title to your review" className="mb-4" />
          <TextArea
            rows={4}
            placeholder="Tell us more about your overall experience"
          />
          <UploadImages />
        </div>
      </Carousel>
      <div className="w-full flex justify-between">
        <Button
          onClick={() => {
            ref.current.prev();
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            ref.current.next();
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
