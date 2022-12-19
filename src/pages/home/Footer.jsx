import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="bg-hero flex justify-center items-center h-60 py-8 px-20 text-accent1">
      <div className="px-8 w-1/3 h-full flex flex-col justify-center">
        <h3 className="font-normal">FAQs</h3>
        <h3 className="font-normal">Delivery & Shipping</h3>
        <h3 className="font-normal">Track Order</h3>
        <h3 className="font-normal">Reviews</h3>
      </div>
      <div className="px-8 w-1/3 border-x h-full flex flex-col justify-center">
        <h3 className="font-normal">Contact Us: </h3>
        <h3 className="font-normal">email: thecakebar@cakemail.com</h3>
        <h3 className="font-normal">Phone: +91 0000000000</h3>
        <h3 className="font-normal">Timings: Mon-Sat (10.30am - 6.00 pm)</h3>
      </div>
      <div className="px-8  w-1/3 h-full flex flex-col justify-center">
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
