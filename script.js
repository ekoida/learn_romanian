import { list } from "./photo.js"

let viewed = 0

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const figure = document.querySelector('.image')
const img = figure.querySelector('img')
const description = figure.querySelector(".description")

const audio = document.querySelector('audio')


img.src = list[0];

next.addEventListener('mousedown', () => {
  audio.play()
})
prev.addEventListener('mousedown', () => {
  audio.play()
})

next.addEventListener('click', () => {
  const nextImage = list[viewed + 1]
  const string = nextImage.split("/")

  img.src = nextImage

  description.textContent = string[string.length - 1]
  viewed = viewed + 1
})

prev.addEventListener('click', () => {
  if (viewed <= 0) {
    viewed = 1
  }
  img.src = list[viewed - 1]
  viewed = viewed - 1
})