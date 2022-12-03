import Waves from "../assets/waves_c.png";

export default function Wave() {
  return (
    <div className="w-full h-52 -mt-8 absolute">
      <img src={Waves} className="h-full w-full object-fill" />
    </div>
  );
}
