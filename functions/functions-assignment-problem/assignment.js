const sayHello = (name) => console.log("Hi " + name);

const sayHello2 = (name, phrase) => console.log(phrase + " " + name);
const sayHello3 = () => console.log("Hi HARD-CODED!");
const sayHello4 = (name) => "Hi " + name;

sayHello("James");
sayHello2("James", "Hello");
sayHello3();
console.log(sayHello4("James"));

const sayHello5 = (name, phrase = "Hi") => console.log(phrase + " " + name);

sayHello5("Marina");
sayHello5("Marina", "Hello");

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empty");
  },
  "Hello",
  "12",
  "abunai",
  "Non-empty"
);
