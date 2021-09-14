const buttons = document.querySelectorAll("button");

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

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", buttonClickHandler);
});

window.addEventListener("scroll", (e) => {
  console.log(e);
});
