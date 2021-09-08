class Course {
  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  calculateValue() {
    return this.length / this.price;
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
