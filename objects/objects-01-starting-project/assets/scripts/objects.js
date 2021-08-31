const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

let person = {
  "first name": "James",
  age: 43,
  hobbies: ["Swimming", "Scuba Diving"],
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

// person.age = 44;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

console.log(person["first name"]);
console.log(person[1.5]);
console.log(person);
