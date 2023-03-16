import Man1 from "../../assets/team/man.png";
import Man2 from "../../assets/team/man-2.png";
import Woman from "../../assets/team/woman.png";
import Image from "../../components/Image";
import { useWindowSize } from "../../Hooks";
import { motion } from "framer-motion";

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
  const [width] = useWindowSize();
  return (
    <div className="relative w-full h-96 text-white parallax parallaxBg2">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="text-2xl sm:text-3xl p-2 bg-accent2 mb-4 text-center">
          Meet our stars who bake the prefect cake for you every time!
        </div>
        <div className="flex">
          {bakersList.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              des={item.des}
              width={width}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({ name, image, des, width }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center mx-2 sm:mx-8"
    >
      <Image
        height={width > 640 ? "160px" : "100px"}
        width={width > 640 ? "160px" : "100px"}
        src={image}
        className="rounded-full bg-secondary2 border"
        style={{ borderColor: "#251a1a", borderWidth: "4px" }}
      />
      <h3 className="my-2 text-center">{name}</h3>
      <p>{des}</p>
    </motion.div>
  );
};
