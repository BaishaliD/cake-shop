import { Divider } from "antd";
import ProductCard from "../../components/ProductCard";
import { HeartOutlined } from "@ant-design/icons";

export default function ProductSuggestion({ title, list, bgColor, textColor }) {
  return (
    <div className={`py-8 w-full text-center ${bgColor} ${textColor}`}>
      <div className="w-full acme text-4xl mx-auto mb-2">{title}</div>
      <div className="flex lg:justify-center overflow-scroll">
        {list.map((item, i) => (
          <ProductCard
            key={i + item.id}
            id={item.id}
            name={item.name}
            image={item.images && item.images[0]}
            price={item.minPrice}
            discountedPrice={item.discountedPrice}
            rating={item.rating}
            eggless={item.eggless}
          />
        ))}
      </div>
    </div>
  );
}
