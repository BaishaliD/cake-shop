import Man1 from "../../assets/team/man.png";
import Man2 from "../../assets/team/man-2.png";
import Woman from "../../assets/team/woman.png";

const bakersList = [
  {
    id: 1,
    name: "John Travolta",
    des: "Chef",
    image: Man1,
  },
  {
    id: 2,
    name: "Monica",
    des: "Head Chef",
    image: Woman,
  },
  {
    id: 3,
    name: "Salman Khan",
    des: "Chef",
    image: Man2,
  },
];

export default function Team() {
  return (
    <div className="relative w-full h-96 text-white parallax3">
      {/* <img src={Baking} className="h-full w-full object-cover" /> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="text-3xl p-2 bg-accent2 mb-4">
          Meet our stars who bake the prefect cake for you every time!
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
    <div className="flex flex-col justify-center items-center mx-8">
      <img
        src={image}
        className="h-40 w-40 rounded-full bg-secondary2 border"
        style={{ borderColor: "#251a1a", borderWidth: "4px" }}
      />
      <h3 className="my-2">{name}</h3>
      <p>{des}</p>
    </div>
  );
};
