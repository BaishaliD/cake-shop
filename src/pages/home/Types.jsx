import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import { useWindowSize } from "../../Hooks";
import { collectionList } from "../../database/StaticData";

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
            desc={collection.desc}
            route={collection.route}
          />
        ))}
      </div>
    </div>
  );
}

const Collection = ({ index, image, name, desc, route }) => {
  const [width] = useWindowSize();
  let alignment;

  if (width > 640 && Math.floor(index / 2) % 2 === 0) {
    alignment = "LEFT";
  } else if (width < 640 && index % 2 === 0) {
    alignment = "LEFT";
  }

  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-1/2 flex h-60 p-4 text-primary1">
      {alignment === "LEFT" ? (
        <>
          <div
            className="w-1/2 h-full overflow-hidden cursor-pointer collection-wrapper"
            onClick={() => {
              navigate(`/type/${route}`);
            }}
          >
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
            <h4 className="w-full text-left px-6 font-thin">{desc}</h4>
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
            <h4 className="w-full text-right px-6 font-thin">{desc}</h4>
          </div>
          <div
            className="w-1/2 h-full overflow-hidden cursor-pointer collection-wrapper"
            onClick={() => {
              navigate(`/type/${route}`);
            }}
          >
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
