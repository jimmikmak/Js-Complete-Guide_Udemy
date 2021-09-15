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
