"use strict";

const linkAll = document.querySelector(".menu__link--all");
const linkImages = document.querySelector(".menu__link--images");

const helpToggle = () => {
  linkAll.classList.toggle("menu__link--active");
  linkImages.classList.toggle("menu__link--active");
};

linkAll.addEventListener("click", function () {
  if (!linkAll.classList.contains("menu__link--active")) helpToggle();
});

linkImages.addEventListener("click", function () {
  if (!linkImages.classList.contains("menu__link--active")) helpToggle();
});
