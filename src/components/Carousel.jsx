import React, { useRef } from "react";
import { Carousel } from "antd";
import FruitPunch from "../assets/fruit-punch.jpg";
import Earth from "../assets/earth.jpg";
import Earth2 from "../assets/earth2.jpg";
import Cupcake from "../assets/cupcake.jpeg";
import Sponge from "../assets/sponge.jpg";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: FruitPunch,
  },
  {
    id: 2,
    image: Earth,
  },
  {
    id: 3,
    image: Earth2,
  },
  {
    id: 4,
    image: Cupcake,
  },
  { id: 5, image: Sponge },
];

export default function CarouselComponent() {
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
    <div className="w-1/2 flex flex-col">
      <div className="">
        <Carousel ref={ref} beforeChange={beforeChange}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="h-full w-full">
              <img src={slide.image} className="h-full w-full" />
            </div>
          ))}
        </Carousel>
      </div>

      <CarouselPagination activeSlide={activeSlide} goTo={goTo} />
    </div>
  );
}

const CarouselPagination = ({ activeSlide, goTo }) => {
  return (
    <div className="flex p-8">
      {slides.map((slide, index) => (
        <div
          className="h-28 w-32 mx-2"
          onClick={() => {
            goTo(index);
          }}
        >
          <img
            src={slide.image}
            className={`h-full w-full ${activeSlide === index && "opacity-50"}`}
          />
        </div>
      ))}
    </div>
  );
};
