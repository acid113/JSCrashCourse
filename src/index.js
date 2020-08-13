const capitalize = (name = "nata") => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

const greetUser = (name, callback) => {
  return callback(capitalize(name));
};

const result = greetUser(undefined, (response) => {
  return response;
});

const result2 = greetUser("marvs", (response) => {
  return response;
});

console.log(`result: ${result}`);
console.log(`result: ${result2}`);
