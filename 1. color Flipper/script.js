"use strict";

// UI ELEMENT
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const btn = document.querySelector(".btn");

const colorText = document.querySelector(".color");
const body = document.body;

const colors = [
  "#0a51cc",
  "#3474e6",
  "rgba(133, 122, 200)",
  "green",
  "skyblue",
];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Changing the styles
const changeStyle = function (color) {
  body.style.backgroundColor = color;
  colorText.style.color = color;
  colorText.textContent = color;
};

// Creating Event Listener for Simple Colors
const simpleColor = function () {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Generate Random Number
    const randNum = getRandomNumber(colors);
    const simpleColor = colors[randNum];
    changeStyle(simpleColor);
  });
};

// Initilisng the colors for the beginning to simple
simpleColor();

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".nav__link");
  if (!clicked) return;

  // Removing the Active Class
  navLink.forEach((link) => link.classList.remove("active"));
  clicked.classList.add("active");

  // Detecting the Type
  if (clicked.classList.contains("simple")) {
    simpleColor();
  } else {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // Generate Random Number
      let hexColor = "#";

      for (let i = 0; i <= 6; i++) {
        hexColor += hex[getRandomNumber(hex)];
      }

      changeStyle(hexColor);
    });
  }
});
