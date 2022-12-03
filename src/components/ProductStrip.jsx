import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductStrip() {
  return (
    <div className="h-8 w-screen bg-secondary2 text-primary2 flex items-center">
      <Item name="All Products" />
      <Item name="Collection" />
      <Item name="Soaps" />
      <Item name="Bath Bombs" />
    </div>
  );
}

const Item = ({ name }) => {
  return (
    <div className="roboto px-4 flex items-center">
      <FontAwesomeIcon icon={faAngleDown} className="text-xs px-2" />
      <span>{name}</span>
    </div>
  );
};
