import HeroImage from "../../assets/hero-cutout-cropped.png";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-hero">
      <div className="w-full flex justify-end relative">
        <img
          src={HeroImage}
          className="absolute top-0 left-0 w-1/2 object-fit"
        />
        <div className="w-1/2 h-full flex flex-col justify-center items-center px-20 my-20 min-h-60v">
          <div className="text-6xl acme text-accent2">The Cake Bar & Co.</div>
          <h1 className="roboto my-8 text-accent1">
            Fresh cakes baked with love
          </h1>
          <h2 className="roboto font-thin text-accent2 text-center">
            Get the perfect cake everytime. From the grandest of celebrations to
            the tiniest moment of joy, we have the perfect cake for every
            occasion.
          </h2>
          <div className="my-4 py-2 px-8 text-center bg-accent2 shadow-lg hover:shadow-md text-primary1 uppercase rounded-md">
            Order Now
          </div>
        </div>
      </div>
    </div>
  );
}
