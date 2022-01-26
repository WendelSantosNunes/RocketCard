export default function initBackgroundColor() {
  const bgCard = document.querySelector('#bg-card')
  const button = document.querySelector('button')
  let click = 0

  function background() {
    click++
    if (click === 1) {
      bgCard.style.background = 'yellow'
      bgCard.style.border = '0.0625rem solid yellow'
    }
    if (click === 2) {
      bgCard.style.background = 'red'
      bgCard.style.border = '0.0625rem solid red'
    }
    if (click === 3) {
      bgCard.style.background = 'blue'
      bgCard.style.border = '0.0625rem solid blue'
    }
    if (click === 4) {
      bgCard.style.background = 'white'
      bgCard.style.border = '0.0625rem solid white'
    }
    if (click === 5) {
      bgCard.style.background = 'black'
      bgCard.style.border = '0.0625rem solid black'
      click = 0
    }
    console.log(click)
  }

  button.addEventListener('click', background)
}
