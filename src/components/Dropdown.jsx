import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
export default function DropdownComponent() {
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>;
}
