import Icon1 from "../assets/icons/organic-white.png";
import Icon2 from "../assets/icons/vegan-white.png";
import Icon3 from "../assets/icons/cruelty-free-white.png";
import Icon4 from "../assets/icons/paraben-free-white.png";

export default function InfoStrip() {
  return (
    <div className="w-1/2 bg-accent1 flex flex-col justify-around items-center py-8">
      <Icon icon={Icon1} />
      <Icon icon={Icon2} />
      <Icon icon={Icon3} />
      <Icon icon={Icon4} />
    </div>
  );
}

const Icon = ({ icon }) => {
  return (
    <div className="h-20">
      <img src={icon} className="h-full w-auto" />
    </div>
  );
};
