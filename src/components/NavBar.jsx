import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function NavBar() {
  return (
    <div className="w-screen h-16 bg-primary1 flex items-center justify-between text-accent1">
      <div className="flex items-center">
        <NavItem name="Home" link="/" />
        <NavItem name="FAQ" link="/faq" />
        <NavItem name="About Us" link="/aboutus" />
      </div>
      <div className="dancing-script text-3xl font-bold">The Bubble Shop</div>
      <div className="flex items-center">
        <Icon icon={faSearch} />
        <Icon icon={faUser} />
        <Icon icon={faHeart} />
        <Icon icon={faCartShopping} />
      </div>
    </div>
  );
}

const NavItem = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className="roboto px-4 hover:opacity-75">{name}</div>
    </Link>
  );
};

const Icon = ({ icon, link }) => {
  return (
    <Link to={link}>
      <FontAwesomeIcon icon={icon} className="px-4 hover:opacity-75" />
    </Link>
  );
};
