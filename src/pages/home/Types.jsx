import { useNavigate } from "react-router-dom";
import Fondant from "../../assets/types/fondant.png";
import Bento from "../../assets/types/bento.jpeg";
import PullUp from "../../assets/types/pull-up.jpeg";
import Mousse from "../../assets/types/mousse.webp";
import Image from "../../components/Image";

const collectionList = [
  {
    id: "01",
    name: "Fondant Cakes",
    image: Fondant,
    route: "fondant",
  },
  {
    id: "02",
    name: "Bento Cakes",
    image: Bento,
    route: "bento",
  },
  {
    id: "03",
    name: "Pull-up Cakes",
    image: PullUp,
    route: "pullup",
  },
  {
    id: "04",
    name: "Mousse Cakes",
    image: Mousse,
    route: "mousse",
  },
];

export default function Types() {
  return (
    <div className="w-full flex flex-wrap justify-center bg-accent2 py-16">
      {/* <div className="w-full acme text-4xl mx-auto my-8 text-accent1 text-center">
        Choose from your favourite flavours!
      </div> */}
      <div className="w-full flex flex-wrap justify-center">
        {collectionList.map((collection, index) => (
          <Collection
            index={index}
            key={collection.id}
            image={collection.image}
            name={collection.name}
            route={collection.route}
          />
        ))}
      </div>
    </div>
  );
}

const Collection = ({ index, image, name, route }) => {
  const navigateTo = useNavigate();
  return (
    <div className="w-1/2 flex h-60 p-4 text-primary1">
      {Math.floor(index / 2) % 2 === 0 ? (
        <>
          <div className="w-1/2 h-full overflow-hidden cursor-pointer collection-wrapper">
            <Image
              width="100%"
              height="100%"
              src={image}
              className="cover zoom"
            />
          </div>

          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <h2
              className="acme border-b w-full px-6 pb-2 text-left"
              style={{ borderColor: "#F0DBDB" }}
            >
              {name}
            </h2>
            <h4 className="w-full text-left px-6 font-thin">
              Keep it in cool and dry place away from sunlight. Dry out soaps
              between uses to maximise product utilisation
            </h4>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <h2
              className="acme border-b w-full px-6 pb-2 text-right"
              style={{ borderColor: "#F0DBDB" }}
            >
              {name}
            </h2>
            <h4 className="w-full text-right px-6 font-thin">
              Keep it in cool and dry place away from sunlight. Dry out soaps
              between uses to maximise product utilisation
            </h4>
          </div>
          <div className="w-1/2 h-full overflow-hidden cursor-pointer collection-wrapper">
            <Image
              width="100%"
              height="100%"
              src={image}
              className="cover zoom"
            />
          </div>
        </>
      )}
    </div>
  );
};
