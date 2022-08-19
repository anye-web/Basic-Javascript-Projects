"use strict";

// UI Elements

const btn = document.querySelector(".nav__icon");
const navLinks = document.querySelector(".nav__links");

btn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  console.log("nav__links");
});
