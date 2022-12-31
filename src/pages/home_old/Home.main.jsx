import Hero from "./Hero";
import Wave from "../../components/Wave";
import InfoStrip from "./InfoStrip";
import NewLaunch from "./NewLaunch";
import Collections from "./Collections";
import BestSellers from "./BestSellers";
import ReviewBoard from "./ReviewBoard";

export default function Home() {
  return (
    <div className="pt-24">
      <Hero />

      {/* <Wave /> */}
      {/* <InfoStrip /> */}
      <div className="w-full flex">
        <NewLaunch />
        <InfoStrip />
      </div>
      <BestSellers />
      <Collections />
      <ReviewBoard />
    </div>
  );
}
