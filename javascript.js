// using range take input for size of array
const input = document.querySelector("input");
let range = parseInt(input.value);

let working = false; // added
let rangeChanged = false;

const playPasue = document.querySelector(".playPasue");

const inputSlider = document.querySelector("input");
document.querySelector("input").addEventListener("input", (e) => {
  range = e.target.value;
  newarr();

  rangeChanged = true;

  const min = inputSlider.min;
  const max = inputSlider.max;

  inputSlider.style.backgroundSize =
    ((range - min) * 100) / (max - min) + "% 100%";
});

function newarr() {
  //random numbers for random height
  let arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(Math.floor(Math.random() * range + 1));
  }

  //after clicking on new button previous bar should be removed
  let htmldiv = document.body.querySelector(".bars");
  htmldiv.innerHTML = "";

  for (let i = 0; i < range; i++) {
    let height = arr[i];
    let element = document.createElement("div");

    element.classList.add("bardiv");
    element.classList.add(`bardiv${i}`);

    element.style.height = `${height * 3}px`;
    htmldiv.appendChild(element);
  }
}
newarr();

document.querySelector(".newArray").addEventListener("click", newarr);

document.querySelector(".bubble").addEventListener("click", bubbleSort);

function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function bubbleSort() {
  playPasue.classList.add("active");
  working = true; // added 27/07/24

  document.querySelector(".bubble").disabled = true;
  document.querySelector(".newArray").disabled = true;

  for (let i = 0; i < range - 1; i++) {
    //check of range changed abort bubbleSort()
    if (rangeChanged) {
      document.querySelector(".bubble").disabled = !true;
      document.querySelector(".newArray").disabled = !true;
      playPasue.classList.remove("active");
      return (rangeChanged = false);
    }

    let bar1;
    let bar2;

    for (let j = 0; j < range - i - 1; j++) {
      bar1 = document.querySelector(`.bardiv${j}`);
      bar2 = document.querySelector(`.bardiv${j + 1}`);

      bar1.style.background = "red";
      bar2.style.background = "red";

      let com1 = window.getComputedStyle(bar1).height;
      let com2 = window.getComputedStyle(bar2).height;

      if (com1.trueInt() > com2.trueInt()) {
        swap(bar1, bar2);
      }

      do {
        // added on 27/07
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(), delay(2);
          })
        );
      } while (!working);

      bar1.style.background = "#f3e310";
      bar2.style.background = "#f3e310";
    }
    bar2.style.background = "#04ab52";
  }
  // console.log("kjlk")
  document.querySelector(".bubble").disabled = !true;
  document.querySelector(".newArray").disabled = !true;

  playPasue.classList.remove("active");
}
function delay() {
  setTimeout(() => {}, 900);
}
String.prototype.trueInt = function () {
  let numericString = this.replace(/\D/g, ""); // Remove non-numeric characters
  return parseInt(numericString, 10); // Parse numeric string into integer
};

playPasue.addEventListener("click", (e) => {
  if (working) {
    e.target.value = "Play";
    working = false;
  } else if (!working) {
    e.target.value = "Pause";
    working = "true";
  }
});
