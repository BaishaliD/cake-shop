import Hero from "../components/Hero";
import Wave from "../components/Wave";
import InfoStrip from "../components/InfoStrip";
import NewLaunch from "../components/NewLaunch";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import ReviewBoard from "../components/ReviewBoard";

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
