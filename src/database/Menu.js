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
        ],
      },
      {
        name: "Occasions",
        route: "/occasion",
        panel: [
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
            name: "Drip Cakes",
            route: "/drip",
          },
          {
            name: "Pull-up Cakes",
            route: "/pullUp",
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
