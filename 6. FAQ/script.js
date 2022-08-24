"use strict";

// UI Elements
const faq = document.querySelectorAll(".faq");

/* Selecting every question and then selecting the buttons on that particular element  */
faq.forEach((element) => {
  const btn = element.querySelector(".faq__icons");
  btn.addEventListener("click", function () {
    /* Checking back on the parent element if the show class exist and it's not the button that is been click then removing the  show class */

    faq.forEach((el) => {
      if (el !== element) {
        el.classList.remove("show--text");
      }
    });

    // Adding and removing the show class from parent element

    element.classList.toggle("show--text");
  });
});
