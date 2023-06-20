import { flavour, type, occasion, category } from "./StaticData";

export const filters = [
  {
    condition: "priceRange",
    text: "Price Range",
    options: [
      {
        label: "Less than Rs.500",
        value: 1,
      },
      {
        label: "Rs.500 - Rs.1,000",
        value: 2,
      },
      {
        label: "Rs.1,000 - Rs.3,000",
        value: 3,
      },
      {
        label: "Rs.3,000 - Rs.5,000",
        value: 4,
      },
      {
        label: "Rs.5,000 - Rs.7,000",
        value: 5,
      },
      {
        label: "Above Rs.7,000",
        value: 6,
      },
    ],
  },
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
    condition: "occasion",
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
