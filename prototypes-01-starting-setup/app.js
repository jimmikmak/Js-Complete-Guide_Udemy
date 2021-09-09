// class ElderlyPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }
// class Person extends ElderlyPerson {
//   name = "James";

//   constructor() {
//     super();
//     this.age = 43;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   }
// }

function Person() {
  this.age = 43;
  this.name = "James";
  this.greet = function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };
}

Person.describe = function () {
  console.log("Creating persons...");
};

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

Person.prototype.printAge = function () {
  console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.length);
console.log(p.toString());
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype);
