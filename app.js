function operation(param1, param2, ...num) {
  const arr = [];
  const add = param1 + param2;
  let total = 1;
  for (let el of num) {
    total = total * el;
  }

  arr.push(add, total);
  return arr;
}

console.log(operation(1, 2, 3, 4, 5));
// ********************************************
const user = {
  banks: [
    { name: `saxeli` },
    { lastName: `gvari` },
    {
      address: {
        city: `kutaisi`,
        country: `georgia`,
      },
    },
  ],
};
function getUserCity(user = {}) {
  const { banks } = user;
  if (banks && banks.length > 2) {
    const { address } = banks[2];
    if (address) {
      const { city } = address;
      return city;
    }
  }
  return undefined;
}

console.log(`getusercity-----`, getUserCity(user));
// ***************************************************
function createNewObject(obj) {
  const { ...rest } = obj;

  return rest;
}

const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const obj2 = createNewObject(obj1);

console.log(obj2);
