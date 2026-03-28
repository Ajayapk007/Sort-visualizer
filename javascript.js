// using range take input for size of array
const input = document.querySelector("input");
let range = parseInt(input.value);
let working = false;
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
  let arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(Math.floor(Math.random() * range + 1));
  }
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

function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  el1.style.height = transform2;
  el2.style.height = transform1;
}

function disableControls(disabled) {
  document.querySelector(".bubble").disabled = disabled;
  document.querySelector(".insertion").disabled = disabled;
  document.querySelector(".selection").disabled = disabled;
  document.querySelector(".newArray").disabled = disabled;
}

function checkAbort() {
  if (rangeChanged) {
    disableControls(false);
    playPasue.classList.remove("active");
    rangeChanged = false;
    return true;
  }
  return false;
}

String.prototype.trueInt = function () {
  let numericString = this.replace(/\D/g, "");
  return parseInt(numericString, 10);
};

async function bubbleSort() {
  playPasue.classList.add("active");
  working = true;
  disableControls(true);
  for (let i = 0; i < range - 1; i++) {
    if (checkAbort()) return;
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
        await new Promise((resolve) => setTimeout(resolve, 2));
      } while (!working);
      bar1.style.background = "#f3e310";
      bar2.style.background = "#f3e310";
    }
    bar2.style.background = "#04ab52";
  }
  disableControls(false);
  playPasue.classList.remove("active");
}

async function insertionSort() {
  playPasue.classList.add("active");
  working = true;
  disableControls(true);
  for (let i = 1; i < range; i++) {
    if (checkAbort()) return;
    let j = i;
    while (j > 0) {
      let bar1 = document.querySelector(`.bardiv${j - 1}`);
      let bar2 = document.querySelector(`.bardiv${j}`);
      bar1.style.background = "red";
      bar2.style.background = "red";
      let com1 = window.getComputedStyle(bar1).height;
      let com2 = window.getComputedStyle(bar2).height;
      if (com1.trueInt() > com2.trueInt()) {
        swap(bar1, bar2);
        j--;
      } else {
        bar1.style.background = "#f3e310";
        bar2.style.background = "#f3e310";
        break;
      }
      do {
        await new Promise((resolve) => setTimeout(resolve, 2));
      } while (!working);
      bar1.style.background = "#f3e310";
      bar2.style.background = "#f3e310";
    }
    document.querySelector(`.bardiv${i}`).style.background = "#04ab52";
  }
  document.querySelector(`.bardiv0`).style.background = "#04ab52";
  disableControls(false);
  playPasue.classList.remove("active");
}

async function selectionSort() {
  playPasue.classList.add("active");
  working = true;
  disableControls(true);
  for (let i = 0; i < range - 1; i++) {
    if (checkAbort()) return;
    let min_idx = i;
    let currentBoundaryBar = document.querySelector(`.bardiv${i}`);
    currentBoundaryBar.style.background = "blue";
    for (let j = i + 1; j < range; j++) {
      let bar1 = document.querySelector(`.bardiv${min_idx}`);
      let bar2 = document.querySelector(`.bardiv${j}`);
      bar2.style.background = "red";
      let com1 = window.getComputedStyle(bar1).height;
      let com2 = window.getComputedStyle(bar2).height;
      if (com2.trueInt() < com1.trueInt()) {
        if (min_idx !== i) {
          document.querySelector(`.bardiv${min_idx}`).style.background = "#f3e310";
        }
        min_idx = j;
        bar2.style.background = "orange";
      }
      do {
        await new Promise((resolve) => setTimeout(resolve, 10));
      } while (!working);
      if (j !== min_idx) {
        bar2.style.background = "#f3e310";
      }
    }
    if (min_idx !== i) {
      let barMin = document.querySelector(`.bardiv${min_idx}`);
      swap(currentBoundaryBar, barMin);
      do {
        await new Promise((resolve) => setTimeout(resolve, 50));
      } while (!working);
      barMin.style.background = "#f3e310";
    }
    currentBoundaryBar.style.background = "#04ab52";
  }
  document.querySelector(`.bardiv${range - 1}`).style.background = "#04ab52";
  disableControls(false);
  playPasue.classList.remove("active");
}

// All event listeners at the bottom
newarr();
document.querySelector(".newArray").addEventListener("click", newarr);
document.querySelector(".bubble").addEventListener("click", bubbleSort);
document.querySelector(".insertion").addEventListener("click", insertionSort);
document.querySelector(".selection").addEventListener("click", selectionSort);

playPasue.addEventListener("click", (e) => {
  if (working) {
    e.target.value = "Play";
    working = false;
  } else {
    e.target.value = "Pause";
    working = true;
  }
});