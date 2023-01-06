import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import Quantity from "../../components/Quantity";
import { CheckCircleOutlined } from "@ant-design/icons";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.jpeg";

export default function CartProductCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-52 flex my-2 p-4 shadow-sm hover:shadow-md cursor-pointer"
      style={{ border: "#0505050f solid 1px" }}
      onClick={() => {
        navigate(`/product/${data.id}`);
      }}
    >
      <Image height="100%" src={data.image} className="cover w-1/5" />
      <div className="px-8 py-2 w-3/5">
        <div className="text-accent2 mb-2 flex items-center text-lg font-bold">
          <span>{data.name}</span>
          <img src={data.eggless ? Veg : NonVeg} className="h-5 w-5 ml-2" />
        </div>
        <div className="flex text-accent2 mb-6 text-sm">
          <span className="mr-4">Weight: {data.weight}</span>
          <span>Flavour: {data.flavour}</span>
        </div>
        <div className="flex w-full items-center my-2 text-sm">
          <div className="w-1/3">Price</div>
          <Price
            price={data.price}
            discountedPrice={data.discountedPrice}
            discount={data.discount}
          />
        </div>
        <div className="flex w-full items-center my-2 text-sm">
          <div className="w-1/3">Quantity</div>
          <Quantity size="small" initialState={data.qty} />
        </div>
        <div className="flex w-full items-center my-2 text-sm">
          <div className="w-1/3">Total</div>
          <Price
            price={data.price}
            discountedPrice={data.discountedPrice}
            discount={data.discount}
          />
        </div>
      </div>
      <div className="h-full w-1/5 flex flex-col justify-around">
        <div className="text-sm">
          <div>
            <CheckCircleOutlined className="text-green-500" /> Delivery by
          </div>
          <h4>{data.delivery}</h4>
        </div>
        <div className="text-sm text-gray-500 underline">
          <div className="my-2">Remove from Cart</div>
          <div className="my-2">Move to Wishlist</div>
        </div>
      </div>
    </div>
  );
}

const Price = ({ price, discountedPrice, discount }) => {
  return (
    <div className="flex items-center">
      {discountedPrice ? (
        <>
          <span className="text-accent2 mr-2">{discountedPrice}</span>
          <span className="text-gray-500 line-through font-normal mr-2">
            {price}
          </span>
          {discount && (
            <div
              className="rounded px-2 text-green-600 text-xs mr-2"
              style={{ border: "solid 1px #16A34A" }}
            >
              {discount} OFF
            </div>
          )}
        </>
      ) : (
        <span className="text-accent2 mr-2">{price}</span>
      )}
    </div>
  );
};
