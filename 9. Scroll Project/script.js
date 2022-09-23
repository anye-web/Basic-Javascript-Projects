// Ui Elements
const date = document.querySelector(".date");
const linkContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");
const navbar = document.querySelector("#navbar");
const topLink = document.querySelector(".top-link");

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".scroll-link");

// Set Date
date.innerHTML = new Date().getFullYear();

// Close Links
navToggle.addEventListener("click", function (e) {
  navbar.classList.toggle("show");
});

// Sticky navbar
// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("sticky-nav");
//   } else {
//     navbar.classList.remove("sticky-nav");
//   }
// });

const navHeight = navbar.getBoundingClientRect().height;

const stickyNavbar = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky-nav");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("sticky-nav");
    topLink.classList.remove("show-link");
  }
};

const headerObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Move to top btn
topLink.addEventListener("click", function (e) {
  e.preventDefault();

  header.scrollIntoView({ behavior: "smooth" });
});

// option 1
// links.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains("scroll-link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// Option 2
scrollLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
