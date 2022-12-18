import Christmas from "../assets/cupcakes/christmas.webp";
import Christmas2 from "../assets/cupcakes/christmas-2.webp";
import Christmas3 from "../assets/cupcakes/christmas-3.webp";
import Halloween from "../assets/cupcakes/halloween.webp";
import Halloween2 from "../assets/cupcakes/halloween-2.jpeg";
import Halloween3 from "../assets/cupcakes/halloween-3.webp";
import Lemon from "../assets/cupcakes/lemon.jpeg";
import Lemon2 from "../assets/cupcakes/lemon-2.jpeg";
import Matcha from "../assets/cupcakes/matcha.webp";
import Teal from "../assets/cupcakes/teal.webp";
import Peach from "../assets/cupcakes/peach.webp";
import Peach2 from "../assets/cupcakes/peach-2.webp";
import Peach3 from "../assets/cupcakes/peach-3.webp";
import RedVelvet from "../assets/cupcakes/redvelvet.webp";
import RedVelvet2 from "../assets/cupcakes/redvelvet-2.webp";
import RedVelvet3 from "../assets/cupcakes/redvelvet-3.webp";
import Choco from "../assets/cupcakes/choco.webp";
import Choco2 from "../assets/cupcakes/choco-2.webp";
import Kid from "../assets/cupcakes/kid.webp";
import Orange from "../assets/cupcakes/orange.webp";
import Orange2 from "../assets/cupcakes/orange-2.webp";
import Truffle from "../assets/cupcakes/truffle.webp";
import Oreo from "../assets/cupcakes/oreo.webp";
import Rainbow from "../assets/cupcakes/rainbow.jpeg";
import Ice from "../assets/cupcakes/ice.jpeg";
import ChocoRed from "../assets/cupcakes/choco-red.webp";
import ChocoRed2 from "../assets/cupcakes/choco-red-2.webp";
import ChocoRed3 from "../assets/cupcakes/choco-red-3.webp";
import ChocoRed4 from "../assets/cupcakes/choco-red-4.webp";

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
    name: "Happy Halloween",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Halloween, Halloween2, Halloween3],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.BOTH],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_03",
    name: "Zingy Lemon",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Lemon, Lemon2],
    flavour: flavour.FRUIT,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_04",
    name: "Matcha Magic",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Matcha],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_05",
    name: "Baby Blue",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Teal],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_06",
    name: "Peachy Tropicana",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Peach, Peach2, Peach3],
    flavour: flavour.FRUIT,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_07",
    name: "Classic Red Velvet",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [RedVelvet, RedVelvet2, RedVelvet3],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_08",
    name: "Sinful Chocolate",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Choco, Choco2],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_09",
    name: "For the Kid in You",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Kid],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_10",
    name: "Zesty Orange",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Orange, Orange2],
    flavour: flavour.FRUIT,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_11",
    name: "Ruffle Love",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Truffle],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_12",
    name: "Oreo Cupcake",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Oreo],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_13",
    name: "Love is Love",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Rainbow],
    flavour: flavour.VANILLA,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_14",
    name: "Breath of Ice",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [Ice],
    flavour: flavour.VANILLA,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
    id: "cc_15",
    name: "Choco Rush",
    desc: "Chocolate Cupcake with Confetti",
    price: "Rs. 300",
    rating: 4.0,
    ratingNo: 5,
    images: [ChocoRed, ChocoRed2, ChocoRed3, ChocoRed4],
    flavour: flavour.CHOCOLATE,
    occasion: occasion.NONE,
    category: category.CUPCAKE,
    type: type.NONE,
    sameDayDelivery: true,
    bestSeller: false,
    new: true,
    eggOption: [eggOption.EGG, eggOption.EGGLESS],
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
    info: [
      "Storage : Keep it in cool and dry place away from sunlight. Dry out soaps between uses to maximise product utilisation",

      "Shelf life : Try to use within 6 months for fragrance purposes after which the colours & fragrances fade.",

      "Our soaps are cold-processed soaps which means no external heat is applied. ",

      "Disclaimer: Our soaps are made from oils & butters hence they won't be rock hard as most soaps available in the market which are chemically processed. ",
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
];

export const fetchProduct = (id) => {
  return cupcakes.find((item) => item.id === id);
};

export const fetchRandomList = (n, excludeId) => {
  //Filter array to exclude current product
  let filteredList = cupcakes.filter((item) => item.id !== excludeId);
  // Shuffle array
  const shuffled = filteredList.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffle
  let selected = shuffled.slice(0, n);

  return selected;
};
