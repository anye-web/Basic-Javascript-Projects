"use strict";

// UI Elements
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");

const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const btnSuprise = document.querySelector(".btn--suprise");

let currentSlide = 0;
let maxSlide = slides.length;

const sliderFunc = function () {
  // Goto to  a particular slide
  const gotoSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    gotoSlide(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    gotoSlide(currentSlide);
  };

  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);
  btnSuprise.addEventListener("click", function () {
    const randNum = Math.floor(Math.random() * maxSlide);
    console.log(randNum);
    currentSlide = randNum;
    gotoSlide(currentSlide);
  });

  // Using left and right key to change element
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  gotoSlide(0);
};

sliderFunc();
