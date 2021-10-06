// 'Library land'
const uid = Symbol("uid");
console.log(uid);

const user = {
  // id: "p1",
  [uid]: "p1",
  name: "James",
  age: 43,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// 'App land' -> Using the library
user.id = "p2"; // this should not be possible!

console.log(user[Symbol("uid")]);
console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["James", "Tim", "Marina"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
