/* Variables */
let startBtn = document.querySelector('.press-start-btn')
let content = document.querySelector('.content')

/* Events */

startBtn.addEventListener('click', () => {
  startBtn.style.display = "none"
  content.style.display = "flex"
})

/* Functions */