"use strict";

// UI ELEMENTs
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");
const btnDecrease = document.querySelector(".btn--decrease");
const btnIncrease = document.querySelector(".btn--increase");
const btnReset = document.querySelector(".btn--reset");

// Functions

let count = 0;

function updateCounter() {
  let color;
  counter.textContent = count;
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }
  counter.style.color = color;
}
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const clicked = e.currentTarget.classList;
    if (clicked.contains("btn--increase")) {
      count++;
      updateCounter();
    } else if (clicked.contains("btn--decrease")) {
      count--;
      updateCounter();
    } else {
      count = 0;
      updateCounter();
    }
  });
});

// btnIncrease.addEventListener("click", function (e) {
//   e.preventDefault();

//   count++;
//   updateCounter("green");
// });

// btnDecrease.addEventListener("click", function (e) {
//   e.preventDefault();

//   count--;
//   updateCounter("red");
// });

// btnReset.addEventListener("click", function (e) {
//   count = 0;
//   updateCounter("white");
// });
