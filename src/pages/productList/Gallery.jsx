import ProductCard2 from "../../components/ProductCard2";
import { Pagination } from "antd";
import Christmas from "../../assets/cupcakes/christmas.webp";
import Halloween from "../../assets/cupcakes/halloween.webp";
import Lemon from "../../assets/cupcakes/lemon.jpeg";
import Matcha from "../../assets/cupcakes/matcha.webp";
import Teal from "../../assets/cupcakes/teal.webp";
import Peach from "../../assets/cupcakes/peach.webp";
import RedVelvet from "../../assets/cupcakes/redvelvet.webp";
import Choco from "../../assets/cupcakes/choco-2.webp";
import Kid from "../../assets/cupcakes/kid.webp";
import Orange from "../../assets/cupcakes/orange.webp";
import Truffle from "../../assets/cupcakes/truffle.webp";
import Oreo from "../../assets/cupcakes/oreo.webp";
import Rainbow from "../../assets/cupcakes/rainbow.jpeg";
import Ice from "../../assets/cupcakes/ice.jpeg";
import { useState } from "react";

const list = [
  {
    id: "001",
    type: "item",
    name: "Christmas Confetti",
    image: Christmas,
    price: "Rs. 250",
    rating: 4.5,
  },
  {
    id: "002",
    type: "item",
    name: "Happy Halloween",
    image: Halloween,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "003",
    type: "item",
    name: "Zingy Lemon",
    image: Lemon,
    price: "Rs. 300",
    rating: 5.0,
  },
  {
    id: "004",
    type: "item",
    name: "Matcha Magic",
    image: Matcha,
    price: "Rs. 250",
    rating: 3.5,
  },
  {
    id: "005",
    type: "item",
    name: "Baby Blue",
    image: Teal,
    price: "Rs. 250",
    rating: 3.0,
  },
  {
    id: "006",
    type: "item",
    name: "Peachy Tropicana",
    image: Peach,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "007",
    type: "item",
    name: "Classic Red Velvet",
    image: RedVelvet,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "008",
    type: "item",
    name: "Sinful Chocolate",
    image: Choco,
    price: "Rs. 250",
    rating: 5.0,
  },
  {
    id: "009",
    type: "item",
    name: "For the Kid in You",
    image: Kid,
    price: "Rs. 250",
    rating: 3.0,
  },
  {
    id: "010",
    type: "item",
    name: "Zesty Orange",
    image: Orange,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "011",
    type: "item",
    name: "Truffle Love",
    image: Truffle,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "012",
    type: "item",
    name: "Oreo Cupcake",
    image: Oreo,
    price: "Rs. 250",
    rating: 4.0,
  },
  {
    id: "013",
    type: "item",
    name: "Love is Love",
    image: Rainbow,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "014",
    type: "item",
    name: "Breath of Ice",
    image: Ice,
    price: "Rs. 250",
    rating: 3.5,
  },
];

export default function Gallery() {
  const [products, setProducts] = useState(list.slice(0, 6));

  const pageChanged = (p) => {
    console.log("Page no. ", p);
    console.log("LISTT :: ", list.slice((p - 1) * 6, p * 6));
    setProducts(list.slice((p - 1) * 6, p * 6));
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-center">
        {products.map((item) => (
          <ProductCard2
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="w-full text-center my-8">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          total={14}
          onChange={pageChanged}
        />
      </div>
    </div>
  );
}
