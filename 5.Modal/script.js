"use strict";

// UI Element
const btn = document.querySelector(".btn");
const modalIcon = document.querySelector(".modal__icon");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

btn.addEventListener("click", toggleModal);
modalIcon.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
