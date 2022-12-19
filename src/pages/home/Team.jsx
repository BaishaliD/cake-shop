import Baking from "../../assets/baking.gif";

const bakersList = [
  {
    id: 1,
    name: "John Travolta",
    des: "Head Chef",
    image: "",
  },
  {
    id: 2,
    name: "John Travolta",
    des: "Head Chef",
    image: "",
  },
  {
    id: 3,
    name: "John Travolta",
    des: "Head Chef",
    image: "",
  },
];

export default function Team() {
  return (
    <div className="relative w-full h-96 text-white parallax3">
      {/* <img src={Baking} className="h-full w-full object-cover" /> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="text-3xl p-2">
          Meet our starts who bake the prefect cake for you every time!
        </div>
        <div className="flex">
          {bakersList.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({ name, image, des }) => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <img src={""} className="h-40 w-40 rounded-full bg-white" />
      <h3 className="my-2">{name}</h3>
      <p>{des}</p>
    </div>
  );
};
