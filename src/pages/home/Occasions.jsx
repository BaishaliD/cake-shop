import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Occasions() {
  return (
    <div className="parallax parallaxBg1 h-96">
      <div className="h-full w-full flex flex-col items-center justify-center text-primary1 roboto font-bold bg-black50 px-4">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="mb-6 text-3xl opacity-100 acme text-center"
        >
          Get the perfect cake for every occasion
        </motion.div>
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap"
        >
          <Tab name={"Birthday"} route="birthday" />
          <Tab name={"Wedding"} route="wedding" />
          <Tab name={"Anniversary"} route="anniversary" />
          <Tab name={"Christmas"} route="christmas" />
          <Tab name={"Valentine's"} route="valentines" />
        </motion.div>
      </div>
    </div>
  );
}

const Tab = ({ name, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-primary1 rounded-md py-2 px-4 my-2 text-center mx-2 text-accent2"
      onClick={() => {
        navigate(`/occasion/${route}`);
      }}
    >
      {name}
    </div>
  );
};
