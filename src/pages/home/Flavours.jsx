import { useNavigate } from "react-router-dom";
import Chocolate from "../../assets/flavours/chocolate.webp";
import Vanilla from "../../assets/flavours/vanilla.webp";
import Strawberry from "../../assets/flavours/strawberry.jpeg";
import RedVelvet from "../../assets/flavours/redvelvet.jpeg";
import BlackForest from "../../assets/flavours/blackforest.jpeg";
import Pineapple from "../../assets/flavours/pineapple.jpeg";
import Image from "../../components/Image";

const collectionList = [
  {
    id: "01",
    name: "Chocolate",
    image: Chocolate,
    route: "chocolate",
  },
  {
    id: "02",
    name: "Vanilla",
    image: Vanilla,
    route: "vanilla",
  },
  {
    id: "03",
    name: "Strawberry",
    image: Strawberry,
    route: "strawberry",
  },
  {
    id: "04",
    name: "Red Velvet",
    image: RedVelvet,
    route: "redvelvet",
  },
  {
    id: "05",
    name: "Black Forest",
    image: BlackForest,
    route: "blackforest",
  },
  {
    id: "06",
    name: "Fruit",
    image: Pineapple,
    route: "fruit",
  },
];

export default function Categories() {
  return (
    <div className="w-full flex flex-wrap justify-center cursor-pointer bg-accent1 py-16">
      <div className="w-full acme text-4xl mx-auto mb-8 text-primary1  text-center">
        Choose from your favourite flavours!
      </div>
      <div className="w-full xl:w-2/3 flex flex-wrap justify-center">
        {collectionList.map((collection) => (
          <Collection
            key={collection.id}
            image={collection.image}
            name={collection.name}
            route={collection.route}
          />
        ))}
      </div>
    </div>
  );
}

const Collection = ({ image, name, route }) => {
  const navigateTo = useNavigate();
  return (
    <div
      className="h-60 w-60 overflow-hidden relative collection-wrapper rounded-full m-6 shadow-lg"
      onClick={() => {
        navigateTo(`/collection/${route}`);
      }}
    >
      <Image height="100%" width="100%" src={image} className="zoom cover" />
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-10 bg-white50 flex justify-center items-center py-4 font-bold text-xl"
        style={{
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
        }}
      >
        {name}
      </div>
    </div>
  );
};
