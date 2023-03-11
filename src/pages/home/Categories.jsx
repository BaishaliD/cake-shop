import { useNavigate } from "react-router-dom";
import Cake from "../../assets/category/cake.jpeg";
import JarCake from "../../assets/category/jarcake.webp";
import Cupcake from "../../assets/category/cupcake.jpeg";
import Macaron from "../../assets/category/macaron.webp";
import Image from "../../components/Image";

const collectionList = [
  {
    id: "cake",
    type: "collection",
    name: "Cakes",
    image: Cake,
    route: "cake",
  },
  {
    id: "cupcake",
    type: "collection",
    name: "Cupcakes",
    image: Cupcake,
    route: "cupcake",
  },
  {
    id: "jarcake",
    type: "collection",
    name: "Jar Cakes",
    image: JarCake,
    route: "jarcake",
  },
];

export default function Categories() {
  return (
    <div className="w-full flex flex-wrap justify-center bg-secondary2 py-16">
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
  const navigate = useNavigate();
  return (
    <div
      className="h-96 w-[350px] overflow-hidden relative collection-wrapper rounded-xl m-6 border-8 border-white cursor-pointer"
      onClick={() => {
        navigate(`/category/${route}`);
      }}
    >
      <Image height="100%" width="100%" src={image} className="zoom cover" />
      <div className="absolute bottom-0 h-full w-full z-10 bg-secondary2 flex justify-center items-center appear">
        <div className="bg-secondary2 py-2 px-4 min-w-[150px] text-accent2 text-2xl font-bold acme opacity-100 text-center">
          {name}
        </div>
      </div>
    </div>
  );
};
