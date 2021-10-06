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
