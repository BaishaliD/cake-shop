import "./Hex.css";

export default function HexImage({
  image,
  title,
  desc,
  active,
  transparent,
  hide,
}) {
  return (
    <li
      className={`hex ${
        active
          ? "hex-active"
          : transparent
          ? "opacity-25"
          : hide
          ? "opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="hexIn bg-green-200">
        <a class="hexLink" href="#">
          <img src={image} alt="" />
          {active && <h1>{title}</h1>}
          {active && <p>{desc}</p>}
        </a>
      </div>
    </li>
  );
}
