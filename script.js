let viewed = 0

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const figure = document.querySelector('.image')

const img = figure.querySelector('img')

img.src = list[0];



next.addEventListener('click', () => {

  img.src = list[viewed + 1]
  viewed = viewed + 1
})

prev.addEventListener('click', () => {
  if (viewed < 0) {
    viewed = 1
  }
  img.src = list[viewed - 1]
  viewed = viewed - 1
})