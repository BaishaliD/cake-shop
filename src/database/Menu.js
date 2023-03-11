export const sideMenuList = [
  {
    name: "Home",
    route: "/",
    collapsible: false,
  },
  {
    name: "Profile",
    route: "/profile",
    collapsible: false,
  },
  {
    name: "Wishlist",
    route: "/wishlist",
    collapsible: false,
  },
  {
    name: "All Products",
    route: "/products",
    collapsible: false,
  },
  {
    name: "Cupcakes",
    route: "/category/cupcake",
    collapsible: false,
  },
  {
    name: "Jar Cakes",
    route: "/category/jarcake",
    collapsible: false,
    noBorder: true,
  },
  {
    collapsible: true,
    collapsibleItems: [
      {
        name: "Flavours",
        route: "/flavour",
        panel: [
          {
            name: "Chocolate",
            route: "/chocolate",
          },
          {
            name: "Vanilla",
            route: "/vanilla",
          },
          {
            name: "Strawberry",
            route: "/strawberry",
          },
          {
            name: "Red Velvet",
            route: "/redvelvet",
          },
          {
            name: "Black Forest",
            route: "/blackforest",
          },
          {
            name: "Fruit",
            route: "/fruit",
          },
        ],
      },
      {
        name: "Occasions",
        route: "/occasion",
        panel: [
          {
            name: "Birthday",
            route: "/birthday",
          },
          {
            name: "Wedding",
            route: "/wedding",
          },
          {
            name: "Anniversary",
            route: "/anniversary",
          },
          {
            name: "Christmas",
            route: "/christmas",
          },
          {
            name: "Valentine's",
            route: "/valentines",
          },
        ],
      },
      {
        name: "Type",
        route: "/type",
        panel: [
          {
            name: "Fondant Cakes",
            route: "/fondant",
          },
          {
            name: "Cake Rolls",
            route: "/cakeroll",
          },
          {
            name: "Bento Cakes",
            route: "/bento",
          },
          {
            name: "Mousse Cakes",
            route: "/mousse",
          },
        ],
      },
    ],
  },
  {
    name: "FAQ",
    route: "/faq",
    collapsible: false,
  },
  {
    name: "About Us",
    route: "/aboutUs",
    collapsible: false,
  },
];
