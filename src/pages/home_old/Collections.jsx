import { useNavigate } from "react-router-dom";
import Cake from "../../assets/category/cake.jpeg";
import JarCake from "../../assets/category/jarcake.webp";
import Cupcake from "../../assets/category/cupcake.jpeg";
import Macaron from "../../assets/category/macaron.webp";

const collectionList = [
  {
    id: "coffee",
    type: "collection",
    name: "Cakes",
    image: Cake,
    route: "cake",
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  {
    id: "love",
    type: "collection",
    name: "Cupcakes",
    image: Cupcake,
    route: "cupcake",
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  {
    id: "gemstone",
    type: "collection",
    name: "Jar Cakes",
    image: JarCake,
    route: "jarcake",
    description:
      "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  },
  // {
  //   id: "fruitpunch",
  //   type: "collection",
  //   name: "Macarons",
  //   image: Macaron,
  //   description:
  //     "The newly launched Jade Collection is a set of 4 handcrafted soap bars made in hues of crystals. The soaps are rich in minerals and essential oil, and scrubs the skin and provides a beautiful afterglow.",
  // },
];

export default function Collections() {
  return (
    <div className="w-full flex flex-wrap justify-center cursor-pointer bg-secondary2 py-16">
      {collectionList.map((collection) => (
        <Collection
          key={collection.id}
          image={collection.image}
          name={collection.name}
          route={collection.route}
        />
      ))}
    </div>
  );
}

const Collection = ({ image, name, route }) => {
  const navigateTo = useNavigate();
  return (
    <div
      className="h-96 w-1/4 overflow-hidden relative collection-wrapper rounded-xl m-6 border-8 border-white"
      onClick={() => {
        navigateTo(`/collection/${route}`);
      }}
    >
      <img src={image} className="h-full w-full zoom object-cover" />
      <div className="absolute bottom-0 h-full w-full z-10 bg-secondary2 flex justify-center items-center appear">
        <div className="bg-secondary2 py-2 px-4 min-w-150 text-accent2 text-2xl font-bold acme opacity-100 text-center">
          {name}
        </div>
      </div>
    </div>
  );
};
