import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import Quantity from "../../components/Quantity";
import { CheckCircleOutlined } from "@ant-design/icons";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.jpeg";

export default function CartProductCard({ data, width }) {
  const navigate = useNavigate();
  return (
    <Link to={`/product/${data.id}`}>
      <div
        className="w-full min-h-52 flex flex-col md:flex-row my-2 p-4 shadow-sm hover:shadow-md cursor-pointer"
        style={{ border: "#0505050f solid 1px" }}
      >
        <div className="w-full md:w-4/5 flex">
          <Image
            height="200px"
            src={data.image}
            className="cover w-1/4 min-w-[150px]"
          />
          <div className="pl-4 pr-2 sm:px-8 py-2 w-3/4">
            <div className="text-accent2 mb-2 flex flex-col items-start sm:items-center sm:flex-row text-lg font-bold">
              <span>{data.name}</span>
              <img
                src={data.eggless ? Veg : NonVeg}
                className="h-5 w-5 sm:ml-2"
              />
            </div>
            <div className="flex flex-col xs:flex-row text-accent2 mb-6 text-sm">
              <span className="mr-4">Weight: {data.weight}</span>
              <span>Flavour: {data.flavour}</span>
            </div>
            {width > 480 && (
              <>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Price</div>
                  <Price
                    price={data.price}
                    discountedPrice={data.discountedPrice}
                    discount={data.discount}
                  />
                </div>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Quantity</div>
                  <Quantity size="small" initialState={data.qty} />
                </div>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Total</div>
                  <Price
                    price={data.price}
                    discountedPrice={data.discountedPrice}
                    discount={data.discount}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {width <= 480 && (
          <div
            className="w-full flex items-start my-4 py-4"
            style={{
              borderTop: "solid 1px #0505050f",
              borderBottom: "solid 1px #0505050f",
            }}
          >
            <div className="w-1/3 flex flex-col items-center">
              <Price
                price={data.price}
                discountedPrice={data.discountedPrice}
                discount={data.discount}
                col={true}
              />
            </div>
            <div className="w-1/3 flex justify-center">
              <Quantity size="small" initialState={data.qty} />
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <Price
                price={data.price}
                discountedPrice={data.discountedPrice}
                discount={data.discount}
                col={true}
                bold={true}
              />
            </div>
          </div>
        )}

        <div className="h-full w-full md:w-1/5 flex flex-row md:flex-col justify-between items-end">
          <div className="text-sm flex flex-col">
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
    </Link>
  );
}

const Price = ({
  price,
  discountedPrice,
  discount,
  col = false,
  bold = false,
}) => {
  return (
    <div className={`flex ${col && "flex-col"} items-center`}>
      {discountedPrice ? (
        <>
          <span className={`text-accent2 mr-2 ${bold && "font-bold"}`}>
            {discountedPrice}
          </span>
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
        <span className={`text-accent2 mr-2 ${bold && "font-bold"}`}>
          {price}
        </span>
      )}
    </div>
  );
};
