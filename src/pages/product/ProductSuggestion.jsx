import { Divider } from "antd";
import ProductCard2 from "../../components/ProductCard2";

export default function ProductSuggestion({ title, list, bgColor, textColor }) {
  return (
    <div className={`w-full text-center p-8 ${bgColor} ${textColor}`}>
      <div className="w-full acme text-4xl mx-auto mb-2">{title}</div>
      <div className="flex justify-center">
        {list.map((item) => (
          <ProductCard2
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.images[0]}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}