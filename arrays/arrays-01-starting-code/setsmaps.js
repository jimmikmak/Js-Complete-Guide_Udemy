// const ids = new Set(["Hi", "from", "set!"]);
// ids.add(2);
// ids.delete("Hi");

// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: "James" };
// const person2 = { name: "Marina" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 50 }]);

// console.log(personData);
// console.log(personData.get(person1));

// // for (const entry of personData.entries()) {
// //   console.log(entry);
// // }

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

let person = { name: "James" };
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, "Extra info");

person = null;

console.log(personData);
