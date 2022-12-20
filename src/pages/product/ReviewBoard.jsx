import { useRef } from "react";
import { Card, Upload, Rate, Divider, Carousel } from "antd";
import Christmas from "../../assets/cupcakes/christmas.webp";
import Oreo from "../../assets/cupcakes/oreo.webp";
import Rainbow from "../../assets/cupcakes/rainbow.jpeg";

const reviews = [
  {
    name: "John Travolta",
    rating: 4,
    location: "Patna, Bihar",
    date: "24/10/2021",
    images: [Christmas, Oreo],
    weight: null,
    flavour: "Chocolate",
    text: "I ordered a cupcake and danced Salsa with it.I ordered a cupcake and danced Salsa with it. I ordered a cupcake and danced Salsa with it.",
  },
  {
    name: "LeBron James",
    rating: 3,
    location: "Patna, Bihar",
    date: "04/09/2021",
    images: [Rainbow],
    weight: null,
    flavour: null,
    text: "I ordered a cupcake and dunked it into the bin.",
  },
  {
    name: "Lionel Messy",
    rating: 3.5,
    location: "Kolkata, West Bengal",
    date: "20/09/2021",
    images: null,
    weight: "500gm",
    flavour: "Vanilla",
    text: "I ordered a cupcake and shot it in the goal.",
  },
];
const { Meta } = Card;

export default function ReviewBoard() {
  return (
    <div className="flex justify-center w-full">
      {/* <div className="gap-4 columns-4 break-inside-avoid w-2/3 bg-red-200"> */}
      <div className="break-inside-avoid w-2/3 flex bg-red-200">
        {reviews.map((item) => (
          <CardItem data={item} />
        ))}
        {/* <CardItem image={Christmas} />
        <CardItem image={Oreo} />
        <CardItem image={Rainbow} />
        <CardItem image={Christmas} />
        <CardItem image={Rainbow} />
        <CardItem image={Oreo} />
        <CardItem image={Rainbow} />
        <CardItem image={Christmas} />
        <CardItem image={Rainbow} />
        <CardItem image={Christmas} />
        <CardItem image={Rainbow} />
        <CardItem image={Oreo} />
        <CardItem image={Rainbow} />
        <CardItem image={Christmas} />
        <CardItem image={Oreo} />
        <CardItem image={Rainbow} />
        <CardItem image={Rainbow} />
        <CardItem image={Christmas} /> */}
      </div>
    </div>
  );
}

const CardItem = ({ data }) => {
  const ref = useRef(null);
  return (
    <div className="w-[300px] bg-white p-4 rounded-md shadow-lg m-4">
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      <div className="w-full h-96">
        {data.images && data.images.length > 0 && (
          <Carousel ref={ref}>
            {data.images.map((slide, index) => (
              <div
                key={index}
                className="w-[300px] w-full acme rounded-xl overflow-hidden relative"
              >
                <img
                  src={slide}
                  className="h-full w-full rounded-xl rounded-xl object-cover"
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      <div className="w-full h-full flex flex-col">
        <h4>This is a great cake!</h4>
        <Rate
          style={{ color: "#815B5B", fontSize: "14px" }}
          allowHalf
          disabled
          defaultValue={data.rating}
        />
        <Divider />
        <div className="text-lg">{data.text}</div>
        <div className="mt-4 text-sm">{data.name}</div>
        <div className="text-sm text-gray-500">{data.location}</div>
        <div className="text-sm text-gray-500">{data.date}</div>
      </div>
    </div>
  );
};
