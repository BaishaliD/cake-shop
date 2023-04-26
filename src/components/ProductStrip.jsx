import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const list = [
  {
    label: "All Products",
    route: "/products",
  },
  {
    label: "Flavours",
    route: "/flavour",
    dropdown: [
      { label: "Chocolate Cakes", key: "/chocolate" },
      { label: "Vanilla Cakes", key: "/vanilla" },
      { label: "Strawberry Cakes", key: "/strawberry" },
      { label: "Red Velvet Cakes", key: "/redvelvet" },
      { label: "Black Forest Cakes", key: "/blackforest" },
      { label: "Fruit Cakes", key: "/fruit" },
    ],
  },
  {
    label: "Occasions",
    route: "/occasion",
    dropdown: [
      { label: "Birthday Cakes ", key: "/birthday" },
      { label: "Wedding Cakes ", key: "/wedding" },
      { label: "Anniversary Cakes", key: "/anniversary" },
      { label: "Christmas Cakes", key: "/christmas" },
      { label: "Valentine's Day Cakes", key: "/valentines" },
    ],
  },
  {
    label: "Types",
    route: "/type",
    dropdown: [
      { label: "Fondant Cakes", key: "/fondant" },
      { label: "Cake Rolls", key: "/cakeroll" },
      { label: "Bento Cakes", key: "/bento" },
      { label: "Mousse Cakes", key: "/mousse" },
    ],
  },
  {
    label: "Cupcakes",
    route: "/category/cupcake",
  },
  {
    label: "Jar Cakes",
    route: "/category/jarcake",
  },
];

export default function ProductStrip() {
  return (
    <div className="h-8 w-screen text-secondary1 bg-primary2 flex items-center">
      {list.map((item) => (
        <Item
          key={item.label}
          label={item.label}
          items={item.dropdown}
          route={item.route}
        />
      ))}
    </div>
  );
}

const Item = ({ label, route, items }) => {
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    console.log("Click on item :: ", route, key);
    navigate(`${route}${key}`);
  };
  return (
    <div className="roboto px-4 flex items-center cursor-pointer">
      {items && items.length > 0 ? (
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          overlayStyle={{ zIndex: "999999" }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {label}
              <DownOutlined className="text-xs" />
            </Space>
          </a>
        </Dropdown>
      ) : (
        <span onClick={() => navigate(route)}>{label}</span>
      )}
    </div>
  );
};
