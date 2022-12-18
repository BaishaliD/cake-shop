import { useNavigate } from "react-router-dom";

export default function Occasions() {
  return (
    <div className="parallax h-96">
      <div className="h-full w-full flex flex-col items-center justify-center text-primary1 roboto font-bold bg-black50">
        <div className="mb-6 text-3xl opacity-100 acme">
          Get the perfect cake for every occasion
        </div>
        <div className="flex justify-center">
          <Tab name={"Birthday"} route="birthday" />
          <Tab name={"Wedding"} route="wedding" />
          <Tab name={"Anniversary"} route="anniversary" />
          <Tab name={"Christmas"} route="christmas" />
          <Tab name={"Valentine's"} route="valentines" />
        </div>
      </div>
    </div>
  );
}

const Tab = ({ name, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-primary1 rounded-md py-2 px-4 text-center mx-2 text-accent2"
      onClick={() => {
        navigate(`/occasion/${route}`);
      }}
    >
      {name}
    </div>
  );
};
