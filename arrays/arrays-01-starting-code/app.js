const numbers = [1, 2, 3];
console.log(numbers);

// less common ways of creating arrays

// const moreNumbers = new Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 3);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "James", { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Snorkeling"); // adds element to end of array
// const poppedValue = hobbies.pop(); // removes last element of array
// hobbies.unshift("Coding"); // adds element to start of array
// hobbies.shift(); // removes first element of array
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading"; // rarely used
// console.log(hobbies[4]);

// hobbies.splice(1, 0, "Good Food", "Swimming");
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// // console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(10.99));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: "James" }, { name: "Marina" }];
// console.log(personData.indexOf({ name: "Marina" }));

// const marina = personData.find((person, index, persons) => {
//   return person.name === "Marina";
// });

// marina.name = "Jack";

// console.log(marina, personData);

// const jamesIndex = personData.findIndex((person, index, persons) => {
//   return person.name === "James";
// });

// console.log(jamesIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);
