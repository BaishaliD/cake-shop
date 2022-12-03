import Earth1 from "../assets/earth_hex.png";
import Earth2 from "../assets/earth2-hex.png";
import GrayImage from "../assets/gray-hex.png";
import Comb from "../assets/comb-hex.png";
import GoldLines from "../assets/gold-lines.png";
import Button from "../subComponents/Button";

export default function Hero() {
  return (
    <div className="h-70v w-full bg-hero flex">
      {/* <img src={GoldLines} /> */}
      <Title />
      <Grid />
    </div>
  );
}

const Title = () => {
  const handleShopNow = () => {
    console.log("Show now button clicked!");
  };
  return (
    <div className="w-2/5 h-full flex flex-col justify-center items-center">
      <div className="w-1/3 h-full border-l border-accent1"></div>
      <div className="cormorant py-8 text-6xl text-accent1 border-y border-accent1">
        <div>Organic and</div>
        <div>
          <span className="dancing-script">Handcrafted</span> soaps
        </div>
        <div>Made with love</div>
      </div>
      <div className="w-1/3 h-full border-r border-accent1 flex justify-center items-start pt-6">
        <Button theme="primary" text="Shop Now" clickHandler={handleShopNow} />
      </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="w-3/5 flex flex-col items-center justify-center overflow-hidden">
      <div className="h-1/2 w-full flex justify-center relative">
        <div className="absolute h-full -translate-y-[calc(75%+1rem)] flex justify-center items-center">
          <img src={GrayImage} className="h-full -translate-x-4 opacity-25" />
          <img src={Comb} className="h-full" />
          <img src={GrayImage} className="h-full translate-x-4 opacity-0" />
        </div>
        <img src={Earth1} className="-translate-x-2" />
        <img src={GrayImage} className="translate-x-2" />
        <div className="absolute h-full translate-y-[calc(75%+1rem)] flex justify-center items-center">
          <img src={GrayImage} className="h-full -translate-x-4 opacity-25" />
          <img src={Earth2} className="h-full" />
          <img src={GrayImage} className="h-full translate-x-4 opacity-25" />
        </div>
      </div>
    </div>
  );
};
