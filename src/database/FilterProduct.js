import { flavour, type, occasion, category } from "./StaticData";

export const filters = [
  {
    condition: "category",
    text: "Category",
    options: generateArray(category),
  },
  {
    condition: "flavour",
    text: "Flavour",
    options: generateArray(flavour),
  },
  {
    condition: "type",
    text: "Type",
    options: generateArray(type),
  },
  {
    condition: "Occasion",
    text: "Occasion",
    options: generateArray(occasion),
  },
];

function generateArray(object) {
  let arr = [];
  Object.entries(object).map(([key, value]) => {
    if (key !== "none") {
      arr.push({
        label: value,
        value: key,
      });
    }
  });
  return arr;
}
