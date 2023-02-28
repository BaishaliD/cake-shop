import Image from "./Image";
import ComingSoonImage from "../assets/undraw/coming_soon.svg";

export default function ComingSoon({ text = "Coming Soon!" }) {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Image height="100%" width="100%" src={ComingSoonImage} />
      <h2 className="mt-8">{text}</h2>
    </div>
  );
}
