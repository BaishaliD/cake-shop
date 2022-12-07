import React from "react";
import { Collapse } from "antd";
import "./Accordion.css";
const { Panel } = Collapse;

const shelfLife = [
  "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

  "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

  "Our soaps are cold-processed soaps which means no external heat is applied. ",

  "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
];

const description = [
  "Type: Dessert Soap",
  "An Assortment of fragarances with all the fun sprinkles & embeds.",
  "Not only do the soaps look delicious to eat but they are also amazing for your skin. They moisturise your skin with nourishing oils and are also super lather-y.",
  "Wt. : 181 gms Dimensions : 3.75” x 1.8”",
  "Note : All our fragrances and colours are imported from skin-safe companies in the USA.",
  "Storage : Keep it in cool and dry place away from sunlight.",
  "Shelf life : No shelf life but try to use within 6 months for fragrance purposes.",
  "Please note: Each batch of soap we make is handmade from start to finish, the design and coloring may vary by batch and/or bars and may therefore differ somewhat from images shown.",
  "Price mentioned is price per piece only.",
];

const ingredients = [
  "Ingredients :Distilled Water, Coconut Oil, Olive Oil, Palm Oil (Sustainable), Sodium Hydroxide, Sweet Almond Oil, Cocoa Butter, Shea Butter, Fragrance, Skin Safe Colourants, Bio-Degradable Glitter",
];

export default function Accordion() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      //   expandIcon={({ isActive }) => (
      //     <CaretRightOutlined rotate={isActive ? 90 : 0} />
      //   )}
      className="site-collapse-custom-collapse"
    >
      <Panel
        header="Description"
        key="1"
        className="site-collapse-custom-panel"
      >
        <div>
          {description.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      </Panel>
      <Panel
        header="Ingredients"
        key="2"
        className="site-collapse-custom-panel"
      >
        <div>
          {ingredients.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      </Panel>
      <Panel header="Shelf Life" key="3" className="site-collapse-custom-panel">
        <div>
          {shelfLife.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      </Panel>
    </Collapse>
  );
}
