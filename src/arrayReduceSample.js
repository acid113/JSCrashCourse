const restaurants = [
  { name: "resto 1", price: 2 },
  { name: "resto 2", price: 4 },
  { name: "resto 3", price: 6 },
  { name: "resto 4", price: 8 }
];

const INITIAL = 0;
const totalPrice = restaurants.reduce((accValue, item) => {
  //first value of 'accValue' = 0 as coded
  console.log(`accValue: ${accValue}, price: ${item.price}`);

  // need to return value
  return accValue + item.price;
}, INITIAL); // set initial value

console.log(`total price: ${totalPrice}`);
