import { useNavigate } from "react-router-dom";
import { addCakes } from "../../../firebase";
import HeroImage from "../../assets/hero-cutout-cropped.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-hero">
      <div className="mt-8 h-[75vh] w-full md:w-1/2 flex justify-center">
        {HeroImage && (
          <img src={HeroImage} className="h-full w-full object-fit" />
        )}
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-12 md:px-20 my-20 text-center md:h-[75vh]">
        <div className="text-6xl acme text-accent2">The Cake Bar & Co.</div>
        <h1 className="roboto my-8 text-accent1">
          Fresh cakes baked with love
        </h1>
        <h2 className="roboto font-thin text-accent2 text-center">
          Get the perfect cake everytime. From the grandest of celebrations to
          the tiniest moment of joy, we have the perfect cake for every
          occasion.
        </h2>
        <div
          role="button"
          className="my-4 py-2 px-8 text-center bg-accent2 shadow-lg hover:shadow-md text-primary1 uppercase rounded-md cursor-pointer"
          onClick={() => {
            navigate("/products");
            // addCakes();
          }}
        >
          Order Now
        </div>
      </div>
    </div>
  );
}
