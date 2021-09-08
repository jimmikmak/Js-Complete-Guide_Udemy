class Course {
  get price() {
    return "$" + this._price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!!";
    }
    this._price = value;
  }

  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  calculateValue() {
    return this.length / this._price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const jsCourse = new Course("Javascript - Beginner", 50, 100);
const reactCourse = new Course("React - Intermediate", 75, 120);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.numOfExercises = exercisesCount;
  }
}

const nodeJsCourse = new PracticalCourse(
  "Node - The Complete Guide",
  100,
  50,
  200
);

console.log(nodeJsCourse);
nodeJsCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const flutterCourse = new TheoreticalCourse(
  "Flutter - A Beginner Guide",
  75,
  80
);

flutterCourse.price = 100;

flutterCourse.printSummary();
flutterCourse.publish();
