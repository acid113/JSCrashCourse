const user = {
  name: "marvs",
  email: "marvs@email.com",
  details: {
    title: "programmer",
    level: {
      role: "III"
    }
  }
};

const displayUserInfo = () => {
  // destructing JSON object
  const {
    name,
    email,
    details: {
      title,
      level: { role }
    }
  } = user;

  console.log(`${name} [${email}] - ${title}(${role})`);
};
// displayUserInfo();

const finalMenuItems = ["Cheeseburger", "Fried Chicken", "Salmon Salad"];

const displayMenuItems = () => {
  // destructing array object
  let [first, second, third] = finalMenuItems;
  console.log(`${first}, ${second}, ${third}`);

  // swapping places w/o creating new object
  [second, first] = [first, second]; // only works with 'LET', not 'CONST'
  console.log(`${first}, ${second}, ${third}`);
};
// displayMenuItems();

const divideMenuItems = () => {
  // rest operator, to get the remaining items in the array
  const [chosenItem, ...removedItems] = finalMenuItems;
  console.log(chosenItem);
  console.log(removedItems);
};
divideMenuItems();
