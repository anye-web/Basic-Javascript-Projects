"use strict";

// Ui Element
const containerInfo = document.querySelector(".container-info");
const btn = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

// Adding Event listener to the parent container
containerInfo.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Remove Active class from all the button
    btn.forEach((el) => {
      el.classList.remove("active");
      e.target.classList.add("active");
    });

    // Remove Active Class from content
    content.forEach((el) => el.classList.remove("active"));

    // Show the specific content to the element click
    const element = document.querySelector(`#${id}`);
    element.classList.add("active");
  }
});
