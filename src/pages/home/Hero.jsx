import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../../assets/hero-cutout-cropped.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-hero">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className="mt-8 h-[75vh] w-full md:w-1/2 flex justify-center"
      >
        {HeroImage && (
          <img src={HeroImage} className="h-full w-full object-fit" />
        )}
      </motion.div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-12 md:px-20 my-20 text-center md:h-[75vh]"
      >
        <div className="acme text-6xl text-accent2">The Cake Bar & Co.</div>

        {/* <h1 className="roboto my-8 text-accent1">
          Fresh cakes baked with love
        </h1> */}
        <h1 className="roboto my-8 text-accent1">Delight in Every Slice</h1>

        {/* <h2 className="roboto font-thin text-accent2 text-center">
          Get the perfect cake everytime. From the grandest of celebrations to
          the tiniest moment of joy, we have the perfect cake for every
          occasion.
        </h2> */}
        <h2 className="roboto font-thin text-accent2 text-center">
          Discover a world of delectable creations, where every bite is a
          delightful celebration of sweetness.
        </h2>
        <motion.div
          role="button"
          className="my-4 py-2 px-8 text-center bg-accent2 shadow-none hover:shadow-md text-primary1 uppercase rounded-md cursor-pointer tracking-widest"
          onClick={() => {
            navigate("/products");
          }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 3px rgb(255, 255 ,255, 0.7)",
            transition: {
              type: "spring",
              stiffness: 300,
            },
          }}
        >
          Order Now
        </motion.div>
      </motion.div>
    </div>
  );
}
