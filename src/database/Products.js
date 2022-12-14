import Christmas from "../assets/cupcakes/christmas.webp";
import Christmas2 from "../assets/cupcakes/christmas-2.webp";
import Christmas3 from "../assets/cupcakes/christmas-3.webp";
import Halloween from "../assets/cupcakes/halloween.webp";
import Lemon from "../assets/cupcakes/lemon.jpeg";
import Matcha from "../assets/cupcakes/matcha.webp";
import Teal from "../assets/cupcakes/teal.webp";
import Peach from "../assets/cupcakes/peach.webp";
import RedVelvet from "../assets/cupcakes/redvelvet.webp";
import Choco from "../assets/cupcakes/choco-2.webp";
import Kid from "../assets/cupcakes/kid.webp";
import Orange from "../assets/cupcakes/orange.webp";
import Truffle from "../assets/cupcakes/truffle.webp";
import Oreo from "../assets/cupcakes/oreo.webp";
import Rainbow from "../assets/cupcakes/rainbow.jpeg";
import Ice from "../assets/cupcakes/ice.jpeg";

const eggOption = {
  EGG: "Egg",
  EGGLESS: "Eggless",
};

const category = {
  NONE: "None",
  CAKE: "Cake",
  CUPCAKE: "Cupcake",
  JAR: "Jar Cake",
};

const flavour = {
  NONE: "None",
  CHOCOLATE: "Chocolate",
  VANILLA: "Vanilla",
  STRAWBERRY: "Strawberry",
  REDVELVET: "Red Velvet",
  TIRAMISU: "Tiramisu",
  BUTTERSCOTCH: "Butterscotch",
  FRUIT: "Fruit",
  BLACKFOREST: "Black Forest",
};

const type = {
  NONE: "None",
  FONDANT: "Fondant",
  DRIP: "Drip",
  TEA: "Tea",
  SPONGE: "Sponge",
  MARBLE: "Marble",
};

const occasion = {
  NONE: "None",
  BIRTHDAY: "Birthday",
  WEDDING: "Wedding",
  ANNIVERSARY: "Anniversary",
  CHRISTMAS: "Christmas",
  VALENTINES: "Valentine's Day",
};

export const cupcakes_old = [
  {
    id: "01_01",
    type: "item",
    name: "Christmas Confetti",
    image: Christmas,
    price: "Rs. 250",
    rating: 4.5,
  },
  {
    id: "01_02",
    type: "item",
    name: "Happy Halloween",
    image: Halloween,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "01_03",
    type: "item",
    name: "Zingy Lemon",
    image: Lemon,
    price: "Rs. 300",
    rating: 5.0,
  },
  {
    id: "01_04",
    type: "item",
    name: "Matcha Magic",
    image: Matcha,
    price: "Rs. 250",
    rating: 3.5,
  },
  {
    id: "01_05",
    type: "item",
    name: "Baby Blue",
    image: Teal,
    price: "Rs. 250",
    rating: 3.0,
  },
  {
    id: "01_06",
    type: "item",
    name: "Peachy Tropicana",
    image: Peach,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "01_07",
    type: "item",
    name: "Classic Red Velvet",
    image: RedVelvet,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "01_08",
    type: "item",
    name: "Sinful Chocolate",
    image: Choco,
    price: "Rs. 250",
    rating: 5.0,
  },
  {
    id: "01_09",
    type: "item",
    name: "For the Kid in You",
    image: Kid,
    price: "Rs. 250",
    rating: 3.0,
  },
  {
    id: "01_10",
    type: "item",
    name: "Zesty Orange",
    image: Orange,
    price: "Rs. 350",
    rating: 4.0,
  },
  {
    id: "01_11",
    type: "item",
    name: "Truffle Love",
    image: Truffle,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "01_12",
    type: "item",
    name: "Oreo Cupcake",
    image: Oreo,
    price: "Rs. 250",
    rating: 4.0,
  },
  {
    id: "01_13",
    type: "item",
    name: "Love is Love",
    image: Rainbow,
    price: "Rs. 300",
    rating: 4.5,
  },
  {
    id: "01_14",
    type: "item",
    name: "Breath of Ice",
    image: Ice,
    price: "Rs. 250",
    rating: 3.5,
  },
];

export const cupcakes = [
  {
    id: "cc_01",
    name: "Christmas Confetti",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 200",
    rating: 4.5,
    ratingNo: 13,
    images: [Christmas, Christmas2, Christmas3],
    flavour: [flavour.CHOCOLATE, flavour.VANILLA, flavour.STRAWBERRY],
    occasion: occasion.CHRISTMAS,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG],
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGGLESS,
        price: "Rs. 250",
      },
      {
        egg: eggOption.EGG,
        price: "Rs. 300",
      },
    ],
    info: [
      "Our Christmas Confetti cake is the perfect dessert for your Christmas spread.",

      "This chocolate cupcake has a moist and soft base, topped with a dollop with confetti-filled buttercream.",

      "Since our cakes are baked and decorated by hand once you place your order, the actual product might differ slightly from the photos provided here.",

      "Note: Please consume within 24 hours of receiving",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [Christmas3],
        weight: null,
        flavour: null,
        eggOption: eggOption.EGG,
        text: "I ordered a cupcake and danced Salsa with it.",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "04/09/2021",
        images: [Christmas, Christmas2],
        weight: null,
        flavour: null,
        eggOption: eggOption.EGG,
        text: "I ordered a cupcake and dunked it into the bin.",
      },
      {
        name: "Lionel Messy",
        location: "Kolkata, West Bengal",
        date: "20/09/2021",
        images: null,
        weight: null,
        flavour: null,
        eggOption: eggOption.EGGLESS,
        text: "I ordered a cupcake and shot it in the goal.",
      },
    ],
  },
  {
    id: "cc_02",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_03",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_04",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_05",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_06",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_07",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_08",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_09",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_10",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_11",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_12",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_13",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
  {
    id: "cc_14",
    name: "Christmas Confetti",
    price: "Rs. 300",
    rating: "4.5",
    images: [],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: eggOption.BOTH,
    weight: ["500 gm", "1 kg"],
    priceList: [
      {
        egg: eggOption.EGG,
        wt: "500 gm",
        price: "Rs. 350",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "500 gm",
        price: "Rs. 300",
      },
      {
        egg: eggOption.EGG,
        wt: "1 kg",
        price: "Rs. 450",
      },
      {
        egg: eggOption.EGGLESS,
        wt: "1 kg",
        price: "Rs. 400",
      },
    ],
    description: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
    ],
    reviews: [
      {
        name: "John Travolta",
        location: "Lucknow, Uttar Pradesh",
        date: "20/09/2021",
        images: [],
        text: "The cake was smooth as Salsa",
      },
      {
        name: "LeBron James",
        location: "Patna, Bihar",
        date: "24/10/2021",
        images: [],
        text: "I ordered a cupcake and dunked it into the bin",
      },
    ],
  },
];
