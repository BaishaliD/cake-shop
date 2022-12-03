import Hero from "../components/Hero";
import Wave from "../components/Wave";
import InfoStrip from "../components/InfoStrip";

export default function Home() {
  return (
    <div className="pt-24">
      <Hero />
      {/* <Wave /> */}
      <InfoStrip />
    </div>
  );
}
