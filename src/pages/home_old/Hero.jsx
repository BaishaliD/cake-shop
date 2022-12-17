import Earth1 from "../../assets/earth_hex.png";
import Earth2 from "../../assets/earth2-hex.png";
import GrayImage from "../../assets/gray-hex.png";
import Comb from "../../assets/comb-hex.png";
import GoldLines from "../../assets/gold-lines.png";
import Button from "../../components/Button";
import HexImage from "../../components/HexImage";
import "../../components/Hex.css";

export default function Hero() {
  return (
    <div className="h-70v w-full bg-hero flex overflow-hidden">
      {/* <img src={GoldLines} /> */}
      <Title />
      <Grid3 />
    </div>
  );
}

const Title = () => {
  const handleShopNow = () => {
    console.log("Shop now button clicked!");
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
        <div className="-translate-x-2 border">
          <img src={Earth1} className="object-contain" />
        </div>
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

const Grid3 = () => {
  //active (default = false) : only active element shows title and description on hover
  //transparent (default = false): sets opacity to 25%
  //hide (default = false) : sets opacity to 0
  return (
    <ul className="hexGrid w-3/5">
      <HexImage image={GrayImage} transparent={true} />
      <HexImage image={Comb} />
      <HexImage image={GrayImage} hide={true} />
      <HexImage
        image={Earth1}
        active={true}
        title="The Earth Collection"
        desc="Organic soaps made in earthly hues and tones"
      />
      <HexImage
        image={GrayImage}
        active={true}
        title="The Royal Collection"
        desc="Gift yourself a luxury fit for the royals"
      />
      <HexImage image={GrayImage} transparent={true} />
      <HexImage image={Earth2} />
      <HexImage image={GrayImage} transparent={true} />
    </ul>
  );
};
