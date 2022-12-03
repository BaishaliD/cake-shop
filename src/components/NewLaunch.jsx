import Image from "../assets/carousel-1.jpg";
import { Link } from "react-router-dom";

const data = {
  id: "jade",
  type: "collection",
  name: "Jade Collection",
  description:
    "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
};

export default function NewLaunch() {
  return (
    <div className="w-1/2 p-16 bg-accent2 text-secondary1 flex-col justify-center">
      <div className="text-4xl dancing-script text-center">
        Pamper youself with our newly launched
      </div>
      <div className="text-6xl dancing-script text-center">{data.name}</div>
      <Link to={`collection/${data.id}`}>
        <div className="relative">
          <img src={Image} className="mt-8" />
          <div className="w-full h-full absolute z-10 bottom-0 opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-accent2 to-accent2-50 flex items-center justify-center text-center roboto">
            {data.description}
          </div>
        </div>
      </Link>
    </div>
  );
}
