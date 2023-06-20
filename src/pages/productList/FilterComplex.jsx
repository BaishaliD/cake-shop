import { useRef, useState } from "react";
import { filters } from "../../database/FilterProduct";
import { Button, Checkbox, Col, Divider, Row, Select, Tag } from "antd";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.png";
import { filter } from "../../../firebase";

const pref = {
  condition: "egg",
  text: "Preference",
  options: [
    {
      label: "Eggless",
      value: "eggless",
    },
    {
      label: "Contains eggs",
      value: "egg",
    },
  ],
};

export default function Filter() {
  const [checkedTags, setCheckedTags] = useState([]);
  let query = {};

  const onChange = (condition, checkedValues) => {
    console.log("checked = ", checkedValues);
    query[condition] = checkedValues;
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeSlider = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChangeSlider = (value) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <div className="p-4 text-accent1 relative">
      <Button
        className="fixed left-[200px]"
        type="default"
        onClick={() => {
          console.log("FILETRS ", query);
          filter();
        }}
      >
        Apply
      </Button>
      <h3>Filters</h3>
      <br />
      {/* <h5 className="mb-2 uppercase">{pref.text}</h5> */}
      <Preference checkedTags={checkedTags} setCheckedTags={setCheckedTags} />
      <Divider />

      {filters.map((filter) => (
        <div key={filter.condition}>
          <h5 className="mb-2 uppercase">{filter.text}</h5>
          <Checkbox.Group
            onChange={(checkedValues) =>
              onChange(filter.condition, checkedValues)
            }
            style={{
              width: "100%",
            }}
          >
            <Row>
              {filter.options.map((el) => (
                <Col span={24}>
                  <Checkbox value={el.value} className="text-accent1">
                    {el.label}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
          <Divider />
        </div>
      ))}
    </div>
  );
}

const Preference = ({ checkedTags, setCheckedTags }) => {
  return (
    <Row>
      {pref.options.map((el) =>
        checkedTags &&
        checkedTags.length > 0 &&
        checkedTags.includes(el.value) ? (
          <Col span={24} className="my-1">
            <Tag
              key={el.value}
              color="#815B5B"
              closable
              onClose={() => {
                console.log("ON CLSOE ", el.value);
                const filtered = checkedTags.filter(
                  (item) => item !== el.value
                );
                if (filtered) {
                  setCheckedTags(filtered);
                } else {
                  setCheckedTags([]);
                }
              }}
              className=""
            >
              <img
                src={el.value === "eggless" ? Veg : NonVeg}
                height={16}
                width={16}
              />
              <span className="ml-2">{el.label}</span>
            </Tag>
          </Col>
        ) : (
          <Col span={24} className="my-1">
            <div
              key={el.value}
              onClick={() =>
                setCheckedTags((prev) =>
                  prev && prev.length > 0 ? [el.value, ...prev] : [el.value]
                )
              }
              className="h-6 flex justify-center items-center px-2 text-sm border rounded max-w-fit"
            >
              <img
                src={el.value === "eggless" ? Veg : NonVeg}
                height={16}
                width={16}
              />
              <span className="ml-2">{el.label}</span>
            </div>
          </Col>
        )
      )}
    </Row>
  );
};
