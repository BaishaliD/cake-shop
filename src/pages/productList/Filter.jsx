import { filters } from "../../database/FilterProduct";
import { Checkbox, Col, Divider, Row, Select } from "antd";

export default function Filter() {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="p-4 text-accent1">
      <h3>Filters</h3>

      {filters.map((filter) => (
        <div key={filter.condition}>
          <h5 className="mb-2 uppercase">{filter.text}</h5>
          <Checkbox.Group
            onChange={onChange}
            style={{
              width: "100%",
            }}
          >
            <Row>
              {filter.options.map((el) => (
                <Col span={16}>
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
