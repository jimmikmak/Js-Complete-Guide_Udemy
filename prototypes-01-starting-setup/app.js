class ElderlyPerson {
  printAge() {
    console.log(this.age);
  }
}
class Person {
  name = "James";

  constructor() {
    // super();
    this.age = 43;
    // this.greet = function() {...}
  }

  // greet = () => {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // };

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

// function Person() {
//   this.age = 43;
//   this.name = "James";
//   // this.greet = function() {...}
// }

// Person.prototype.greet = function () {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " years old."
//   );
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p));

const course = {
  // new Object()
  title: "Javascript - The Complete Guide",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "James",
      writable: true,
    },
  }
);

// student.name = "James";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
