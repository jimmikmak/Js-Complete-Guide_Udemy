const button = document.querySelector("button");

// button.onclick = function () {

// };

const buttonClickHandler = (e) => {
  // e.target.disabled = true;
  console.log(e);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked...");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (e) => {
//   console.log(e);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const div = document.querySelector("div");

div.addEventListener(
  "mouseenter",
  (e) => {
    console.log("CLICKED DIV");
    console.log(e);
  },
  true
);

button.addEventListener("click", (e) => {
  e.stopPropagation();
  // e.stopImmediatePropagation();
  console.log("CLICKED BUTTON");
  console.log(e);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (e) => {
//     e.target.classList.toggle("highlight");
//   });
// });

// PERFECT event delegation pattern!!! ->
list.addEventListener("click", (e) => {
  // console.log(e.currentTarget);
  // e.target.classList.toggle("highlight");
  e.target.closest("li").classList.toggle("highlight");
  // form.submit();
  button.click();
});

// Infinite scroll example ->
let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);
