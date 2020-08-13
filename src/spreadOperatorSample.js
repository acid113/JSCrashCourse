const breakfastMenuItems = ["Buckwheat Pancakes"];
const mainMenuItems = ["Harvest Salad", "Fried Chicken"];

// Appending Arrays
const allMenuItems = [...breakfastMenuItems, ...mainMenuItems];
// console.log(allMenuItems);

const allMenuItems2 = [
  ...breakfastMenuItems,
  "Glazed Salmon",
  "Meatloaf",
  ...mainMenuItems
];
// console.log(allMenuItems2)

// 'Copying' property values
const userModel = {
  name: "",
  email: "",
  password: "",
  level: ""
};
const userInput = {
  name: "marvs",
  email: "marvs@email.com",
  password: "mypassword"
};

// old style, adding 1st param '{}' will create a new object
const newUser = Object.assign({}, userModel, userInput, { verified: false });

// using spread operator
const newUser2 = { ...userModel, ...userInput, verified: false };
console.log(userModel); // userModel not changed
console.log(newUser);
console.log(newUser2);
