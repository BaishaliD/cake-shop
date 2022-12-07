import { Divider } from "antd";
import ProductCard from "../../components/ProductCard";
import FruitPunch from "../../assets/fruit-punch.jpg";
import Earth from "../../assets/earth.jpg";
import Earth2 from "../../assets/earth2.jpg";
import Cupcake from "../../assets/cupcake.jpeg";
import Sponge from "../../assets/sponge.jpg";

const list = [
  {
    id: "001",
    type: "item",
    name: "Waffle Cream Soap",
    image: Earth,
    price: "Rs. 250",
  },
  {
    id: "002",
    type: "item",
    name: "Cupcake Soap",
    image: Cupcake,
    price: "Rs. 350",
  },
  {
    id: "003",
    type: "item",
    name: "Gem Stone Soap",
    image: Earth2,
    price: "Rs. 300",
  },
  {
    id: "004",
    type: "item",
    name: "Fruit Fiesta Soap",
    image: FruitPunch,
    price: "Rs. 250",
  },
];

export default function YouMayAlsoLike() {
  return (
    <div className="w-full bg-primary1 text-center p-8">
      <div className="w-full roboto text-4xl mx-auto mb-8">
        You May Also Like
      </div>
      <div className="flex justify-center">
        {list.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
