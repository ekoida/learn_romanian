import { list } from "./photo.js";

let viewed = 0;

const filterControl = document.querySelector(".filter-control");
const menu = document.querySelector(".menu");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const figure = document.querySelector(".image");
const img = figure.querySelector("img");
const description = figure.querySelector(".description");

const audio = document.querySelector("audio");

filterControl.addEventListener("click", () => {
  menu.classList.toggle("show");
});

img.src = list[0];

next.addEventListener("mousedown", () => {
  audio.play();
});

next.addEventListener("mouseup", () => {
  audio.pause();
});

prev.addEventListener("mousedown", () => {
  audio.play();
});

prev.addEventListener("mouseup", () => {
  audio.pause();
});

next.addEventListener("click", () => {
  const nextImage = list[viewed + 1];
  const string = nextImage.split("/");

  img.src = nextImage;

  description.textContent = string[string.length - 1];
  viewed = viewed + 1;
});

prev.addEventListener("click", () => {
  if (viewed <= 0) {
    viewed = 1;
  }
  img.src = list[viewed - 1];
  viewed = viewed - 1;
});
