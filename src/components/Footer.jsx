import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { useWindowSize } from "../Hooks";

export default function Footer() {
  const [width] = useWindowSize();
  return (
    <div className="bg-hero flex flex-col sm:flex-row justify-center items-center sm:h-60 py-8 lg:px-20 text-accent1">
      <div className="px-4 md:px-8 pb-6 sm:pb-0 w-full sm:w-1/4 md:w-1/3 h-full flex flex-col justify-center">
        <h3 className="font-normal">FAQs</h3>
        <h3 className="font-normal">Delivery & Shipping</h3>
        <h3 className="font-normal">Track Order</h3>
        <h3 className="font-normal">Reviews</h3>
      </div>
      <div
        className={`px-4 md:px-8 py-8 sm:py-0 w-full sm:w-1/2 md:w-1/3 h-full flex flex-col justify-center ${
          width < 640 ? "border-y" : "border-x"
        }`}
      >
        <h3 className="font-normal">Contact Us: </h3>
        <h3 className="font-normal">email: thecakebar@cakemail.com</h3>
        <h3 className="font-normal">Phone: +91 0000000000</h3>
        <h3 className="font-normal">Timings: Mon-Sat (10.30am - 6.00 pm)</h3>
      </div>
      <div className="px-4 md:px-8 pt-8 sm:pt-0 w-full sm:w-1/4 md:w-1/3 h-full flex flex-col justify-center">
        <h3 className="font-normal">Get connected :</h3>
        <h3 className="font-normal flex items-center">
          <FacebookFilled className="pr-2" />
          Facebook
        </h3>
        <h3 className="font-normal flex items-center">
          <InstagramFilled className="pr-2" />
          Instagram
        </h3>
      </div>
    </div>
  );
}
