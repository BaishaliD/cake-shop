import { useNavigate } from "react-router-dom";
import FruitPunch from "../assets/fruit-punch.jpg";
import Earth from "../assets/earth.jpg";
import Earth2 from "../assets/earth2.jpg";
import Cupcake from "../assets/cupcake.jpeg";
import Sponge from "../assets/sponge.jpg";

const collectionList = [
  {
    id: "coffee",
    type: "collection",
    name: "Coffee Collection",
    image: Earth,
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  {
    id: "love",
    type: "collection",
    name: "Love Collection",
    image: Sponge,
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  {
    id: "gemstone",
    type: "collection",
    name: "Gem Stone Collection",
    image: Earth2,
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  {
    id: "fruitpunch",
    type: "collection",
    name: "Fruit Punch Collection",
    image: FruitPunch,
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
];

export default function Collections() {
  return (
    <div className="flex h-96 cursor-pointer">
      {collectionList.map((collection) => (
        <Collection
          key={collection.id}
          image={collection.image}
          name={collection.name}
          id={collection.id}
        />
      ))}
    </div>
  );
}

const Collection = ({ image, name, id }) => {
  const navigateTo = useNavigate();
  return (
    <div
      className="h-full w-1/4 overflow-hidden relative collection-wrapper"
      onClick={() => {
        navigateTo(`/collection/${id}`);
      }}
    >
      <img src={image} className="h-full w-full zoom" />
      <div className="absolute bottom-0 h-full w-full z-10 bg-black flex justify-center items-center appear">
        <div className="bg-secondary2 py-2 px-4 min-w-150 text-accent2 text-2xl font-bold dancing-script opacity-100">
          {name}
        </div>
      </div>
    </div>
  );
};
