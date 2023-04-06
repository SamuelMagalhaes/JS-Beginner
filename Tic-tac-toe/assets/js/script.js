/* VARIABLES */
const squares = document.querySelectorAll('.square')
const restartBtn = document.querySelector('#restart-button')

let player = document.querySelector('#player-area img')
let play = true;

/* EVENTS */

for(let square of squares){
  square.addEventListener('click', () =>{
    if(play){
      square.classList.add('background-x')
      player.src = "./assets/img/cross.svg"
      play = false
    } else {
      square.classList.add('background-o')
      player.src = "./assets/img/circle.svg"
      play = true
    }
  }, {once:true})
}

restartBtn.addEventListener('click', () => {
 
})

/* FUNCTIONS */