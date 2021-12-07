// Using jQuery to animate the home
/*$(document).ready(function () {
  let typed = new Typed(".typing", {
    strings: [
      "Self-Taught Software Developer",
      "Freelance Developer",
      "Blogger",
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });
});*/


let typed = new Typed(".typing", {
  strings: ["Self-Taught Software Developer", "Freelance Developer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true,
});

// Global variables
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();

// Contact section
VANTA.GLOBE({
  el: ".single-page",
  color: 0x7d0b14,
  color2: 0xf2f2f2,
  backgroundColor: 0xb3b3bb,
  waveHeight: 200,
  shininess: 50,
  waveSpeed: 2.5,
  zoom: 0.5,
  scale: 1.0,
  scaleMobile: 1.0,
  size: 0.7,
  minHeight: 200.0,
  minWidth: 200.0,
});
