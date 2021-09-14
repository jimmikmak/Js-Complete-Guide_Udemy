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

// window.addEventListener("scroll", (e) => {
//   console.log(e);
// });

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
