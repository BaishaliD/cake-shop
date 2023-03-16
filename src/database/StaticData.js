import Fondant from "../assets/types/fondant.png";
import Bento from "../assets/types/bento.jpeg";
import CakeRoll from "../assets/types/cake-roll.jpeg";
import Mousse from "../assets/types/mousse.webp";
import Chocolate from "../assets/flavours/chocolate.webp";
import Vanilla from "../assets/flavours/vanilla.webp";
import Strawberry from "../assets/flavours/strawberry.jpeg";
import RedVelvet from "../assets/flavours/redvelvet.jpeg";
import BlackForest from "../assets/flavours/blackforest.jpeg";
import Pineapple from "../assets/flavours/pineapple.jpeg";

export const category = {
  none: "None",
  cake: "Cake",
  cupcake: "Cupcake",
  jarcake: "Jar Cake",
};

export const flavour = {
  none: "None",
  chocolate: "Chocolate",
  vanilla: "Vanilla",
  strawberry: "Strawberry",
  redvelvet: "Red Velvet",
  fruit: "Fruit",
  blackforest: "Black Forest",
};

export const type = {
  none: "None",
  fondant: "Fondant",
  cakeroll: "Cake Roll",
  bento: "Bento",
  mousse: "Mousse",
};

export const occasion = {
  none: "None",
  birthday: "Birthday",
  wedding: "Wedding",
  anniversary: "Anniversary",
  christmas: "Christmas",
  valentines: "Valentine's Day",
};

export const suggestions = {
  chocolate: "Chocolate cakes",
  vanilla: "Vanilla cakes",
  strawberry: "Strawberry cakes",
  redvelvet: "Red Velvet cakes",
  fruit: "Fruit cakes",
  blackforest: "Black Forest cakes",
  fondant: "Fondant cakes",
  cakeroll: "Cake Rolls",
  bento: "Bento cakes",
  mousse: "Mousse cakes",
  birthday: "Birthday cakes",
  wedding: "Wedding cakes",
  anniversary: "Anniversary cakes",
  christmas: "Christmas cakes",
  valentines: "Valentine's Day cakes",
  cake: "Cakes",
  cupcake: "Cupcakes",
  jarcake: "Jar Cakes",
};

export const collectionList = [
  {
    id: "01",
    name: "Fondant Cakes",
    desc: "Indulge in our collection of exquisitely decorated fondant cakes, to delight your taste buds and impress your guests.",
    image: Fondant,
    route: "fondant",
  },
  {
    id: "02",
    name: "Bento Cakes",
    desc: "Treat yourself to a delightful culinary experience with our bento cakes, inspired by the iconic Japanese lunch boxes and featuring a variety of flavors and colors.",
    image: Bento,
    route: "bento",
  },
  {
    id: "03",
    name: "Cake Rolls",
    desc: "Our cake rolls are a true feast for the senses, combining fluffy sponge cake with creamy fillings and rolled to perfection.",
    image: CakeRoll,
    route: "cakeroll",
  },
  {
    id: "04",
    name: "Mousse Cakes",
    desc: "Indulge in our heavenly mousse cakes with their light and airy texture that melts in your mouth.",
    image: Mousse,
    route: "mousse",
  },
];

export const flavourList = [
  {
    id: "01",
    name: "Chocolate",
    image: Chocolate,
    route: "chocolate",
  },
  {
    id: "02",
    name: "Vanilla",
    image: Vanilla,
    route: "vanilla",
  },
  {
    id: "03",
    name: "Strawberry",
    image: Strawberry,
    route: "strawberry",
  },
  {
    id: "04",
    name: "Red Velvet",
    image: RedVelvet,
    route: "redvelvet",
  },
  {
    id: "05",
    name: "Black Forest",
    image: BlackForest,
    route: "blackforest",
  },
  {
    id: "06",
    name: "Fruit",
    image: Pineapple,
    route: "fruit",
  },
];

export const OccassionsPage = {
  birthday: {
    image: "birthday.jpeg",
    title: "Say Happy Birthday with a sweet surprise!",
    subtitle: "Choose from our wide range of Birthday Cakes",
  },
  wedding: {
    image: "wedding.webp",
    title: 'Nothing says "Happily Ever After" like a gorgeous wedding cake!',
    subtitle: "Make your special day even more special with The Cake Bar & Co.",
  },
  anniversary: {
    image: "anniversary.webp",
    title: "Celebrate years of love with something sweet!",
    subtitle: "Check out our Anniversary collection",
  },
  christmas: {
    image: "christmas.jpeg",
    title: "'Tis the season of celebration!",
    subtitle: "Say Merry Christmas with our Christmas Collection",
  },
  valentines: {
    image: "valentines.jpg",
    title: "Say 'I love you' like you mean it!",
    subtitle: "Check out our Valentine's Day special collection",
  },
};

export const TypesPage = {
  bento: {
    title: "Bento Cakes",
  },
  fondant: {
    title: "Fondant Cakes",
  },
  cakeroll: {
    title: "Cake Rolls",
  },
  mousse: {
    title: "Mousse Cakes",
  },
};

export const CategoryPage = {
  cake: {
    title: "Cakes",
  },
  cupcake: {
    title: "Cupcakes",
  },
  jarcake: {
    title: "Jar Cakes",
  },
};

export const FlavourPage = {
  chocolate: {
    title: "Chocolate Cakes",
  },
  vanilla: {
    title: "Vanilla Cakes",
  },
  strawberry: {
    title: "Strawberry Cakes",
  },
  redvelvet: {
    title: "Red Velvet Cakes",
  },
  fruit: {
    title: "Fruit Cakes",
  },
  blackforest: {
    title: "Black Forest Cakes",
  },
};
