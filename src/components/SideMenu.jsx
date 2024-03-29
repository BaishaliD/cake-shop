import { useNavigate } from "react-router-dom";
import { sideMenuList } from "../database/Menu";
import { Collapse, Drawer } from "antd";
const { Panel } = Collapse;
import "./SideMenu.css";

export default function SideMenu({ sideMenu, setSideMenu }) {
  const navigate = useNavigate();
  return (
    <Drawer
      placement="left"
      onClose={() => {
        setSideMenu(false);
      }}
      open={sideMenu}
      headerStyle={{ background: "#F5EBE0" }}
      bodyStyle={{ padding: 0, paddingTop: "1rem", background: "#F5EBE0" }}
      width="300px"
    >
      {sideMenuList.map((item) =>
        item.collapsible === false ? (
          <div
            key={item.route}
            className="w-full text-gray-600 p-4 hover:bg-primary1 cursor-pointer"
            style={{
              borderBottom: item.noBorder === true ? "" : "1px solid #0505050f",
            }}
            onClick={() => {
              setSideMenu(false);
              navigate(item.route);
            }}
          >
            {item.name}
          </div>
        ) : (
          <CollapseItem
            items={item.collapsibleItems}
            setSideMenu={setSideMenu}
          />
        )
      )}
    </Drawer>
  );
}

const CollapseItem = ({ items, setSideMenu }) => {
  const navigate = useNavigate();
  return (
    <Collapse>
      {items.map((item) => (
        <Panel
          header={item.name}
          key={item.name + item.route}
          className="bg-secondary2 hover:bg-primary1"
        >
          {item &&
            item.panel &&
            item.panel.length > 0 &&
            item.panel.map((i) => (
              <div
                key={i.route}
                className="w-full text-gray-600 p-2 hover:bg-primary1 cursor-pointer"
                onClick={() => {
                  setSideMenu(false);
                  navigate(item.route + i.route);
                }}
              >
                {i.name}
              </div>
            ))}
        </Panel>
      ))}
    </Collapse>
  );
};
