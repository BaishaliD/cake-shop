import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import { flavourList } from "../../database/StaticData";
import { motion } from "framer-motion";

export default function Flavours() {
  return (
    <div className="w-full flex flex-wrap justify-center cursor-pointer bg-accent1 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full acme text-4xl mx-auto mb-8 text-primary1  text-center"
      >
        Choose from your favourite flavours!
      </motion.div>
      <div className="w-full xl:w-2/3 flex flex-wrap justify-center">
        {flavourList.map((flavour) => (
          <Item
            key={flavour.id}
            image={flavour.image}
            name={flavour.name}
            route={flavour.route}
          />
        ))}
      </div>
    </div>
  );
}

const Item = ({ image, name, route }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-60 w-60 overflow-hidden relative collection-wrapper rounded-full m-6 shadow-lg"
      onClick={() => {
        navigate(`/flavour/${route}`);
      }}
    >
      <Image height="100%" width="100%" src={image} className="zoom cover" />
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-10 bg-white50 flex justify-center items-center py-4 font-bold text-xl"
        style={{
          borderTop: "2px solid white",
          borderBottom: "2px solid white",
        }}
      >
        {name}
      </div>
    </motion.div>
  );
};
