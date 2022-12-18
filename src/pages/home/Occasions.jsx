import HeartCake from "../../assets/hero.webp";

export default function Occasions() {
  return (
    <div className="w-full h-96 relative text-primary1 roboto font-bold">
      <img src={HeartCake} className="w-full h-full object-cover" />
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center bg-black50">
        <div className="mb-6 text-3xl opacity-100 acme">
          Get the perfect cake for every occasion
        </div>
        <div className="flex justify-center">
          <Tab name={"Birthday"} />
          <Tab name={"Wedding"} />
          <Tab name={"Anniversary"} />
          <Tab name={"Christmas"} />
          <Tab name={"Valentine's"} />
        </div>
      </div>
    </div>
  );
}

const Tab = ({ name, link }) => {
  return (
    <div className="bg-primary1 rounded-md py-2 px-4 text-center mx-2 text-accent2">
      {name}
    </div>
  );
};
