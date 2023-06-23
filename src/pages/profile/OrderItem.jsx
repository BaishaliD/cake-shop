import Image from "../../components/Image";
import { CheckCircleOutlined } from "@ant-design/icons";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.png";

export default function OrderItem({ data }) {
  return (
    <div className="w-full flex items-center my-2 cursor-pointer">
      <Image height="100px" width="100px" src={data.image} className="cover" />
      <div className="pl-4 pr-2 sm:px-8 py-2 w-3/4">
        <div className="text-accent2 flex flex-col items-start sm:items-center sm:flex-row text-lg font-bold">
          <span>{data.name}</span>
          <img src={data.eggless ? Veg : NonVeg} className="h-5 w-5 sm:ml-2" />
        </div>
        <div className="flex flex-col text-accent2 text-sm">
          <span className="mr-4">Weight: {data.weight}</span>
          <span>Flavour: {data.flavour}</span>
          <span>Quantity: {data.qty}</span>
        </div>
      </div>
    </div>
  );
}
