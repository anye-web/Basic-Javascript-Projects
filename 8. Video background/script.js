// Ui Elements
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function (e) {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
  // btn.classList.toggle("slide");
});

// Preloader
const Preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  Preloader.classList.add("hide-preloader");
});
