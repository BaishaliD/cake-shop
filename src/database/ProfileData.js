import Rose1 from "../assets/cakes/rose-1.jpeg";
import German1 from "../assets/cakes/german-chocolate.webp";
import HeartChoco from "../assets/cakes/heart-choco.jpeg";

export let Orders = [
  {
    orderId: "872351",
    status: {
      orderPlaced: "19 January 2023",
      paymentProcessed: "19 January 2023",
      dispatched: "24 January 2023",
      delivered: "24 January 2023",
      eta: "",
    },
    total: "Rs. 1600",
    deliveryCharge: "Rs. 0",
    amount: "Rs. 1600",
    paymentStatus: "Successful",
    paymentMode: "Debit Card (XXXX XXXXX XXXX 7521)",
    items: [
      {
        id: "cake_rose",
        name: "Roses For My Love",
        price: "Rs. 1000",
        total: "Rs. 1000",
        discount: "Rs. 200",
        amount: "Rs. 800",
        qty: 1,
        image: Rose1,
        flavour: "Strawberry",
        eggless: false,
        weight: "1 kg",
      },
      {
        id: "cake_choco_heart",
        name: "Heart of Chocolate",
        price: "Rs. 800",
        total: "Rs. 1600",
        discount: "Rs. 400",
        amount: "Rs. 1200",
        qty: 2,
        image: HeartChoco,
        flavour: "Chocolate",
        eggless: true,
        weight: "1.5 kg",
      },
    ],
    address: {
      id: "add_01",
      name: "Baishali Datta",
      phone: "9874723102",
      pincode: "700056",
      address: "8/1 M.B.Road",
      locality: "Belgharia",
      city: "Kolkata",
      state: "West Bengal",
    },
  },
  {
    orderId: "1681396",
    status: {
      orderPlaced: "19 January 2023",
      paymentProcessed: "",
      dispatched: "",
      delivered: "",
      eta: "21 January 2023",
    },
    total: "Rs. 1000",
    deliveryCharge: "Rs. 50",
    amount: "Rs. 1050",
    paymentStatus: "Pending",
    paymentMode: "UPI (baishali95920-1@okaxis)",
    items: [
      {
        id: "cake_german_chocolate",
        name: "German Chocolate Cake",
        price: "Rs. 1000",
        total: "Rs. 1000",
        discount: "Rs. 400",
        amount: "Rs. 600",
        qty: 1,
        image: German1,
        flavour: "Chocolate",
        eggless: false,
        weight: "1 kg",
      },
    ],
    address: {
      id: "add_02",
      name: "Baishali Datta",
      phone: "9830127521",
      pincode: "122008",
      address: "Plot 242-243, AIHP Palms",
      locality: "Udyog Vihar, Sector 18",
      city: "Gurgaon",
      state: "Haryana",
    },
  },
];

export let Reviews = [
  {
    order_id: "ABCD1234",
    item_id: "wedding_ice_and_gold",
    item: "Ice and Gold",
    images: [Rose1, German1],
    reviewed: true,
    name: "Rishika Malik",
    location: "Gurgaon, Haryana",
    date: "October 19, 2021",
    rating: 4,
    uploadedImages: [Rose1, German1],
    title: "Made my day!",
    text: "The cake was perfect. All the guests really enjoyed it.",
  },
  {
    order_id: "ABCD1234",
    item_id: "wedding_ice_and_gold",
    item: "Ice and Gold",
    images: [Rose1, German1],
    date: "January 19, 2021",
    reviewed: false,
  },
  {
    order_id: "ABCD1234",
    item_id: "wedding_ice_and_gold",
    item: "Ice and Gold",
    images: [Rose1, German1],
    name: "Rosey Diaz",
    location: "Vaizag, Andhra Pradesh",
    date: "October 17, 2020",
    reviewed: true,
    rating: 5,
    // uploadedImages: [HeartChoco],
    // title: "Beautiful and delicious!",
    // text: "My wedding cake was the star of the evening. The cake was as tasty as it was beautiful, and the service from the team was pariseworthy.",
  },
];
