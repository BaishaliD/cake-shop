import Image from "../assets/earth_hex.png";

export default function Hero() {
  return (
    <div className="h-70v w-full bg-hero flex">
      <Title />
      <Grid />
    </div>
  );
}

const Title = () => {
  return <div className="w-2/5"></div>;
};

const Grid = () => {
  return (
    <div className="w-3/5 flex flex-col items-center justify-center overflow-hidden">
      <div className="h-1/2 flex justify-center relative">
        <img
          src={Image}
          className="absolute h-full -translate-y-[calc(75%+1rem)]"
        />
        <img src={Image} className="-translate-x-2" />
        <img src={Image} className="translate-x-2" />
        <img
          src={Image}
          className=" absolute h-full translate-y-[calc(75%+1rem)]"
        />
      </div>
    </div>
  );
};
