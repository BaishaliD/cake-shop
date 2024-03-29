import React, { useState, useRef } from "react";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Image from "../components/Image";
import { useWindowSize } from "../Hooks";

export default function CarouselComponent({ slides }) {
  const [width] = useWindowSize();
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
    <div className="w-full flex flex-col sm:flex-row justify-around px-2">
      {width >= 640 && (
        <CarouselPagination
          slides={slides}
          activeSlide={activeSlide}
          goTo={goTo}
        />
      )}
      <div className="w-full sm:w-3/4 h-full mt-4 bg-white p-4 rounded-xl">
        <div className="w-full h-full relative">
          {slides && slides.length > 1 && (
            <div className="flex items-center">
              <LeftCircleOutlined
                className="text-3xl sm:text-5xl text-white bg-black50 rounded-full z-10 absolute top-1/2 left-5 -translate-y-1/2"
                onClick={() => {
                  ref.current.prev();
                }}
              />
            </div>
          )}
          <Carousel ref={ref} beforeChange={beforeChange}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="carousel-height w-full acme rounded-xl overflow-hidden relative"
              >
                <Image
                  width="100%"
                  height="100%"
                  src={slide}
                  className="rounded-xl cover"
                />
              </div>
            ))}
          </Carousel>
          {slides && slides.length > 1 && (
            <div className="flex items-center">
              <RightCircleOutlined
                className="text-3xl sm:text-5xl text-white bg-black50 rounded-full z-10 absolute top-1/2 right-5 -translate-y-1/2"
                onClick={() => {
                  ref.current.next();
                }}
              />
            </div>
          )}
        </div>
      </div>
      {width < 640 && (
        <CarouselPagination
          slides={slides}
          activeSlide={activeSlide}
          goTo={goTo}
        />
      )}
    </div>
  );
}

const CarouselPagination = ({ slides, activeSlide, goTo }) => {
  return (
    <div className="flex flex-row sm:flex-col p-2">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="h-28 w-28 m-2 rounded-xl overflow-hidden"
          onClick={() => {
            goTo(index);
          }}
        >
          <Image
            width="100%"
            height="100%"
            src={slide}
            className={`cover ${activeSlide === index && "opacity-50"}`}
          />
        </div>
      ))}
    </div>
  );
};
