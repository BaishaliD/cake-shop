import Fondant from "../assets/types/fondant.png";
import Bento from "../assets/types/bento.jpeg";
import CakeRoll from "../assets/types/cake-roll.jpeg";
import Mousse from "../assets/types/mousse.webp";

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
    image: Mousse,
    route: "mousse",
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
