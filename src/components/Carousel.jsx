import React, { useRef } from "react";
import { Carousel } from "antd";
import FruitPunch from "../assets/fruit-punch.jpg";
import Earth from "../assets/earth.jpg";
import Earth2 from "../assets/earth2.jpg";
import Cupcake from "../assets/cupcake.jpeg";
import Sponge from "../assets/sponge.jpg";
import { useState } from "react";

export default function CarouselComponent({ slides }) {
  const ref = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = (slide) => {
    setActiveSlide(slide);
    ref.current.goTo(slide, false);
  };

  const beforeChange = (from, to) => {
    setActiveSlide(to);
  };

  return (
    <div className="w-full flex justify-around">
      <CarouselPagination
        slides={slides}
        activeSlide={activeSlide}
        goTo={goTo}
      />
      <div className="w-3/4 h-full mt-4">
        <Carousel ref={ref} beforeChange={beforeChange}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="h-[calc(45vw)] w-full acme bg-white rounded-xl overflow-hidden p-4"
            >
              <img
                src={slide}
                className="h-full w-full rounded-xl rounded-xl object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const CarouselPagination = ({ slides, activeSlide, goTo }) => {
  return (
    <div className="flex-col p-2">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="h-28 w-28 m-2 rounded-xl overflow-hidden"
          onClick={() => {
            goTo(index);
          }}
        >
          <img
            src={slide}
            className={`h-full w-full object-cover ${
              activeSlide === index && "opacity-50"
            }`}
          />
        </div>
      ))}
    </div>
  );
};
