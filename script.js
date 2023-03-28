/* VARIABLES */
let projectTitle = document.querySelector("#project-title")

let mainProject = document.querySelector("#main-project")

let projects = document.querySelectorAll(".project")
let projectsPic = document.querySelectorAll(".project img")

let projectsDescription = document.querySelectorAll("#project-info div")

let calculatorProject = document.querySelector("#calculator")
let converterProject = document.querySelector("#converter")
let guessNumberProject = document.querySelector("#guessnumber")
let memoryProject = document.querySelector("#memorygame")
let kanBanProject = document.querySelector("#kanban")

/* EVENTS */
for(let targetProject of projects){
  targetProject.addEventListener('click', ()=>{
    projectTitle.innerText = targetProject.innerText

    if(projectTitle.innerText === "Calculator"){
      calculatorProject.classList.remove("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      memoryProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Converter"){
      calculatorProject.classList.add("hidden")
      converterProject.classList.remove("hidden")
      guessNumberProject.classList.add("hidden")
      memoryProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Guess the Number"){
      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.remove("hidden")
      memoryProject.classList.add("hidden")
      kanBanProject.classList.add("hidden")

    } else if(projectTitle.innerText === "Jogo da Memória"){
      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      memoryProject.classList.remove("hidden")
      kanBanProject.classList.add("hidden")
      
    } else if(projectTitle.innerText === "KanBan"){
      calculatorProject.classList.add("hidden")
      converterProject.classList.add("hidden")
      guessNumberProject.classList.add("hidden")
      memoryProject.classList.add("hidden")
      kanBanProject.classList.remove("hidden")
    }
  })
}
/* FUNCTIONS */