"use strict";

// Ui Element

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function (e) {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function (e) {
  counter--;
  carousel();
});

function carousel() {
  // Working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  // Working with btn
  if (counter < slides.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
