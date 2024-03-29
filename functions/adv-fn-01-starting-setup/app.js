const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(10, 10));
console.log(add(200, 500));

const addRandom = (num1) => {
  return num1 + Math.random();
};
console.log(addRandom(5));

let previousResult = 0;

const addMoreNumbers = (num1, num2) => {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
};

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];

const printHobbies = (h) => {
  h.push("NEW HOBBY");
  console.log(h);
};

printHobbies(hobbies);

let multiplier = 1.1;

const createTaxCalculator = (tax) => {
  const calculateTax = (amount) => {
    console.log(multiplier);
    return amount * tax * multiplier;
  };

  return calculateTax;
};

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "James";

const greetUser = () => {
  let name = "Clem";
  console.log("Hi " + name + "!");
};

// let name = Mac;

userName = "Marina";

greetUser();

// const powerOf = (x, n) => {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// };

// Recursive ver. ->
const powerOf = (x, n) => {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);

  // Short ver. ->
  return n === 1 ? x : x * powerOf(x, n - 1);
};

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: "James",
  friends: [
    {
      name: "Clem",
      friends: [
        {
          name: "Al",
          friends: [
            {
              name: "Steve",
            },
            {
              name: "Patrick",
            },
          ],
        },
      ],
    },
    {
      name: "Edwina",
    },
  ],
};

const getFriendNames = (person) => {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
};

console.log(getFriendNames(myself));
