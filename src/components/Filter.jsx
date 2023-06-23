import { useRef, useState } from "react";
import { Button, Checkbox, Col, Divider, Row, Select, Tag } from "antd";
import Veg from "../assets/icons/veg.png";
import NonVeg from "../assets/icons/nonveg.png";
import Delivery from "../assets/icons/delivery.png";

const pref = {
  condition: "egg",
  text: "Preference",
  options: [
    {
      label: "Eggless",
      value: "eggless",
      icon: Veg,
    },
    {
      label: "Contains eggs",
      value: "egg",
      icon: NonVeg,
    },
    {
      label: "Same Day Delivery",
      value: "same_day",
      icon: Delivery,
    },
  ],
};

const sortOptions = [
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Ratings", value: "ratings" },
];

export default function Filter() {
  const [checkedTags, setCheckedTags] = useState([]);
  const [sortBy, setSortBy] = useState();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSortBy(value);
  };

  return (
    <div className="p-4 flex justify-between">
      <div className="flex h-6">
        <Preference checkedTags={checkedTags} setCheckedTags={setCheckedTags} />
      </div>
      <Select
        placeholder="Sort by"
        style={{
          width: 200,
        }}
        allowClear
        options={sortOptions}
        value={sortBy}
        onChange={handleChange}
        className="mr-4"
      />
    </div>
  );
}

const Preference = ({ checkedTags, setCheckedTags }) => {
  return (
    <>
      {pref.options.map((el) =>
        checkedTags &&
        checkedTags.length > 0 &&
        checkedTags.includes(el.value) ? (
          <Tag
            key={el.value}
            color="#815B5B"
            closable
            onClose={() => {
              console.log("ON CLSOE ", el.value);
              const filtered = checkedTags.filter((item) => item !== el.value);
              if (filtered) {
                setCheckedTags(filtered);
              } else {
                setCheckedTags([]);
              }
            }}
            className="mx-2"
          >
            {el.icon && <img src={el.icon} height={16} width={16} />}
            <span className="ml-2">{el.label}</span>
          </Tag>
        ) : (
          <div
            key={el.value}
            onClick={() =>
              setCheckedTags((prev) =>
                prev && prev.length > 0 ? [el.value, ...prev] : [el.value]
              )
            }
            className="mx-2 h-6 flex justify-center items-center px-2 text-sm border rounded max-w-fit"
          >
            {el.icon && <img src={el.icon} height={16} width={16} />}
            <span className="ml-2">{el.label}</span>
          </div>
        )
      )}
    </>
  );
};
