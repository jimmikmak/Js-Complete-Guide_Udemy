const randomIntBetween = (min, max) => {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min);
  // eg. result 9.999999999 -> 10
};

console.log(randomIntBetween(1, 10));
