// class Person {
//   name = "James";

//   constructor() {
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

const person = new Person();
person.greet();
