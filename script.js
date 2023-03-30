/* VARIABLES */
let projectTitle = document.querySelector("#project-title")

let mainProject = document.querySelector("#main-project")

let projects = document.querySelectorAll(".project")
let projectsPic = document.querySelectorAll(".project img")

let projectsDescription = document.querySelectorAll("#project-info div")

let calculatorProject = document.querySelector("#calculator")
let converterProject = document.querySelector("#converter")
let guessNumberProject = document.querySelector("#guessnumber")
let ticTacToeProject = document.querySelector("#tictactoe")
let kanBanProject = document.querySelector("#kanban")

/* EVENTS */
for(let targetProject of projects){
  targetProject.addEventListener('click', ()=>{
    projectTitle.innerText = targetProject.innerText

    if(projectTitle.innerText === "Calculator"){

      mainProject.style.backgroundImage = "url('./Calculator/assets/img/template-layout.png')";

      calculatorProject.classList.remove("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      ticTacToeProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Converter"){

      mainProject.style.backgroundImage = "url('./Converter/assets/img/template-layout.png')";

      calculatorProject.classList.add("hidden")
      converterProject.classList.remove("hidden")
      guessNumberProject.classList.add("hidden")
      ticTacToeProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Guess the Number"){

      mainProject.style.backgroundImage = "url('./Guess-the-number/assets/img/template-layout.png')";

      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.remove("hidden")
      ticTacToeProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Tic Tac Toe"){

      mainProject.style.backgroundImage = "url('./Tic-tac-toe/assets/img/template-layout.png')";

      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      ticTacToeProject.classList.remove("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "KanBan"){

      mainProject.style.backgroundImage = "url('./ToDo-List/assets/img/template-layout.png')";

      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      ticTacToeProject.classList.add("hidden")
      kanBanProject.classList.remove("hidden")
    }
  })
}
/* FUNCTIONS */