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
        name: "Pizza Palace",
        desc: "Authentic Italian pizzas with fresh ingredients",
        type: "Italian",
        rating: 4.7,
        reviews: 245,
        lat: 28.6139, // Delhi
        long: 77.2090,
        dishes: [
          { id: "dish1", name: "Margherita Pizza", price: 299, image: require("../assets/images/pizza.png") },
          { id: "dish2", name: "Pepperoni Pizza", price: 349, image: require("../assets/images/pizza.png") }
        ]
      },
      {
        id: "res102",
        name: "Burger Hub",
        desc: "Juicy burgers with premium beef and toppings",
        type: "Fast Food",
        rating: 4.5,
        reviews: 180,
        lat: 19.0760, // Mumbai
        long: 72.8777,
        dishes: [
          { id: "dish3", name: "Cheese Burger", price: 199, image: require("../assets/images/hamburger.png") },
          { id: "dish4", name: "Veggie Burger", price: 149, image: require("../assets/images/hamburger.png") }
        ]
      }
    ]
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
        rating: 4.8,
        reviews: 90,
        lat: 12.9716, // Bengaluru
        long: 77.5946,
        dishes: [
          { id: "dish5", name: "Chocolate Cupcake", price: 120, image: require("../assets/images/cupcake.png") },
          { id: "dish6", name: "Strawberry Cupcake", price: 130, image: require("../assets/images/cupcake.png") }
        ]
      },
      {
        id: "res104",
        name: "Sweet Cravings",
        desc: "Cakes, pastries, and desserts",
        type: "Bakery",
        rating: 4.6,
        reviews: 110,
        lat: 13.0827, // Chennai
        long: 80.2707,
        dishes: [
          { id: "dish7", name: "Red Velvet Cake", price: 450, image: require("../assets/images/cupcake.png") },
          { id: "dish8", name: "Cheesecake", price: 400, image: require("../assets/images/cupcake.png") }
        ]
      }
    ]
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
        type: "Italian",
        rating: 4.4,
        reviews: 160,
        lat: 22.5726, // Kolkata
        long: 88.3639,
        dishes: [
          { id: "dish9", name: "Spaghetti Bolognese", price: 299, image: require("../assets/images/spaghetti.png") },
          { id: "dish10", name: "Garlic Bread", price: 99, image: require("../assets/images/spaghetti.png") }
        ]
      },
      {
        id: "res106",
        name: "Parcel Express",
        desc: "Asian takeout boxes and quick meals",
        type: "Chinese",
        rating: 4.3,
        reviews: 130,
        lat: 18.5204, // Pune
        long: 73.8567,
        dishes: [
          { id: "dish11", name: "Noodles Box", price: 199, image: require("../assets/images/takeout-box.png") },
          { id: "dish12", name: "Fried Rice Box", price: 220, image: require("../assets/images/takeout-box.png") }
        ]
      }
    ]
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
        type: "Beverages",
        rating: 4.2,
        reviews: 75,
        lat: 17.3850, // Hyderabad
        long: 78.4867,
        dishes: [
          { id: "dish13", name: "Mango Smoothie", price: 150, image: require("../assets/images/tropical-drink.png") },
          { id: "dish14", name: "Strawberry Shake", price: 160, image: require("../assets/images/tropical-drink.png") }
        ]
      },
      {
        id: "res108",
        name: "Tropical Paradise",
        desc: "Mocktails and tropical drinks",
        type: "Beverages",
        rating: 4.6,
        reviews: 120,
        lat: 15.2993, // Goa
        long: 74.1240,
        dishes: [
          { id: "dish15", name: "Pina Colada", price: 200, image: require("../assets/images/tropical-drink.png") },
          { id: "dish16", name: "Virgin Mojito", price: 180, image: require("../assets/images/tropical-drink.png") }
        ]
      }
    ]
  }
];

