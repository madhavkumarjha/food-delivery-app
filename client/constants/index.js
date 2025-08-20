// constants/index.js
export const categories = [
  { id: 1, image: require("../assets/images/pizza.png"), title: "Pizza" },
  { id: 2, image: require("../assets/images/hamburger.png"), title: "Burger" },
  { id: 3, image: require("../assets/images/cupcake.png"), title: "Cupcake" },
  {
    id: 4,
    image: require("../assets/images/takeout-box.png"),
    title: "Parcel",
  },
  {
    id: 5,
    image: require("../assets/images/tropical-drink.png"),
    title: "Drinks",
  },
  {
    id: 6,
    image: require("../assets/images/tropical-fish.png"),
    title: "Fish",
  },
  {
    id: 7,
    image: require("../assets/images/spaghetti.png"),
    title: "Spaghetti",
  },
];

export const featured = [
  {
    id: 1,
    title: "Top Rated Near You",
    description: "The most popular restaurants in your area.",
    restaurants: [
      {
        id: "res101",
        name: "Papa John's Pizza",
        desc: "Authentic Italian pizzas with fresh ingredients",
        type: "Italian",
        image: require("../assets/images/papaJohns.jpg"),
        rating: 4.7,
        address: "1235 seconds street",
        reviews: 245,
        lat: 28.6139, // Delhi
        long: 77.209,
        dishes: [
          {
            id: "dish1",
            name: "Margherita Pizza",
            price: 299,
            desc: "Classic pizza with fresh basil and mozzarella",
            image: require("../assets/images/pizza.png"),
          },
          {
            id: "dish2",
            name: "Pepperoni Pizza",
            price: 349,
            desc: "Spicy pepperoni with mozzarella cheese",
            image: require("../assets/images/pizza.png"),
          },
          {
            id: "dish3",
            name: "BBQ Chicken Pizza",
            price: 349,
            desc: "BBQ chicken with red onions and cilantro",
            image: require("../assets/images/pizza.png"),
          },
          {
            id: "dish4",
            name: "Teriyaki Chicken Pizza",
            price: 349,
            desc: "Teriyaki chicken with pineapple and green peppers",
            image: require("../assets/images/pizza.png"),
          },
          {
            id: "dish5",
            name: "Veggie Supreme Pizza",
            price: 349,
            desc: "Loaded with fresh vegetables and cheese",
            image: require("../assets/images/pizza.png"),
          },

        ],
      },
      {
        id: "res102",
        name: "Burger Hub",
        desc: "Juicy burgers with premium beef and toppings",
        type: "Fast Food",
        image: require("../assets/images/burgerHub.jpeg"),
        rating: 4.5,
        address: "235 seconds street",
        reviews: 180,
        lat: 19.076, // Mumbai
        long: 72.8777,
        dishes: [
          {
            id: "dish3",
            name: "Cheese Burger",

            price: 199,
            desc: "Classic burger with cheese, lettuce, and tomato",
            image: require("../assets/images/hamburger.png"),
          },
          {
            id: "dish4",
            name: "Veggie Burger",
            price: 149,
            desc: "Grilled vegetable patty with fresh toppings",
            image: require("../assets/images/hamburger.png"),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Sweet Tooth",
    description: "Cakes, cupcakes & desserts for your cravings.",
    restaurants: [
      {
        id: "res103",
        name: "Cupcake World",
        desc: "Delicious cupcakes and sweet treats",
        type: "Bakery",
        image: require("../assets/images/cupcakeWorld.jpg"),
        rating: 4.8,
        address: "985 seconds street",
        reviews: 90,
        lat: 12.9716, // Bengaluru
        long: 77.5946,
        dishes: [
          {
            id: "dish5",
            name: "Chocolate Cupcake",
            price: 120,
            desc: "Rich chocolate cupcake with creamy frosting",
            image: require("../assets/images/cupcake.png"),
          },
          {
            id: "dish6",
            name: "Strawberry Cupcake",
            price: 130,
            desc: "Light strawberry cupcake with fresh cream",
            image: require("../assets/images/cupcake.png"),
          },
        ],
      },
      {
        id: "res104",
        name: "Sweet Cravings",
        desc: "Cakes, pastries, and desserts",
        image: require("../assets/images/sweetCravings.jpg"),
        type: "Bakery",
        rating: 4.6,
        address: "6523 seconds street",
        reviews: 110,
        lat: 13.0827, // Chennai
        long: 80.2707,
        dishes: [
          {
            id: "dish7",
            name: "Red Velvet Cake",
            price: 450,
            desc: "Classic red velvet cake with cream cheese frosting",
            image: require("../assets/images/cupcake.png"),
          },
          {
            id: "dish8",
            name: "Cheesecake",
            price: 400,
            desc: "Creamy cheesecake with a graham cracker crust",
            image: require("../assets/images/cupcake.png"),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Quick Bites",
    description: "Fast and tasty options for a quick hunger fix.",
    restaurants: [
      {
        id: "res105",
        name: "Spaghetti House",
        desc: "Fresh pasta and Italian quick bites",
        image: require("../assets/images/spaghettiHouse.webp"),
        type: "Italian",
        rating: 4.4,
        address: "785 seconds street",
        reviews: 160,
        lat: 22.5726, // Kolkata
        long: 88.3639,
        dishes: [
          {
            id: "dish9",
            name: "Spaghetti Bolognese",
            price: 299,
            desc: "Classic spaghetti with rich meat sauce",
            image: require("../assets/images/spaghetti.png"),
          },
          {
            id: "dish10",
            name: "Garlic Bread",
            price: 99,
            desc: "Toasted garlic bread with herbs",
            image: require("../assets/images/spaghetti.png"),
          },
        ],
      },
      {
        id: "res106",
        name: "Parcel Express",
        desc: "Asian takeout boxes and quick meals",
        image: require("../assets/images/parcelExpress.jpg"),
        type: "Chinese",
        rating: 4.3,
        address: "669 seconds street",
        reviews: 130,
        lat: 18.5204, // Pune
        long: 73.8567,
        dishes: [
          {
            id: "dish11",
            name: "Noodles Box",
            price: 199,
            desc: "Stir-fried noodles with vegetables and sauce",
            image: require("../assets/images/takeout-box.png"),
          },
          {
            id: "dish12",
            name: "Fried Rice Box",
            price: 220,
            desc: "Fried rice with mixed vegetables and protein",
            image: require("../assets/images/takeout-box.png"),
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Refreshing Drinks",
    description: "Cool down with refreshing beverages.",
    restaurants: [
      {
        id: "res107",
        name: "Drink Station",
        desc: "Juices, smoothies & shakes",
        image: require("../assets/images/drinkStation.jpg"),
        type: "Beverages",
        rating: 4.2,
        address: "236 seconds street",
        reviews: 75,
        lat: 17.385, // Hyderabad
        long: 78.4867,
        dishes: [
          {
            id: "dish13",
            name: "Mango Smoothie",
            price: 150,
            desc: "Creamy mango smoothie with fresh fruit",
            image: require("../assets/images/tropical-drink.png"),
          },
          {
            id: "dish14",
            name: "Strawberry Shake",
            price: 160,
            desc: "Refreshing strawberry shake with ice cream",
            image: require("../assets/images/tropical-drink.png"),
          },
        ],
      },
      {
        id: "res108",
        name: "Tropical Paradise",
        desc: "Mocktails and tropical drinks",
        image: require("../assets/images/tropicalParadise.webp"),
        type: "Beverages",
        rating: 4.6,
        address: "8523 seconds street",
        reviews: 120,
        lat: 15.2993, // Goa
        long: 74.124,
        dishes: [
          {
            id: "dish15",
            name: "Pina Colada",
            price: 200,
            desc: "Tropical pineapple and coconut mocktail",
            image: require("../assets/images/tropical-drink.png"),
          },
          {
            id: "dish16",
            name: "Virgin Mojito",
            price: 180,
            desc: "Refreshing mint and lime mocktail",
            image: require("../assets/images/tropical-drink.png"),
          },
        ],
      },
    ],
  },
];
