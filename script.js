"use strict";

const totalSectons = document.querySelectorAll(".mobile-nav span");
const mobileContainer = document.querySelector(".mobile-main");
const mobileNav = document.querySelector(".mobile-nav");


mobileNav.addEventListener("click", function (e) {

  const section = e.target;

  if (!section.closest(".val")) return;

  totalSectons.forEach(section => {
    section.classList.remove("active");
  });

  const dataNum = section.closest(".val").getAttribute("data-num");

  totalSectons[dataNum].classList.add("active");
  mobileContainer.style.transform = `translateX(-${dataNum * 100}%)`;
});