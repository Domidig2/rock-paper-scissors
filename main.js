
// Dichiariamo le variabili che andremo a incrementare 
let userScore = 0;
let computerScore = 0;

// Catturiamo i due tag span tramite ID che conterrano il nostro punteggio 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

// Catturiamo tutti i div in modo da avere innanzituto un ordine e per una questione di velocità
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result>p");

// Qua catturiamo le nostre tre scelte per il gioco
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function convertWord(letter) {
    if(letter=="r") return "Rock"; 
    if(letter=="p") return "Paper"; 
    return "Scissors"; 
    
}

// Queste saranno le funzioni dedicate all'incremento del punteggio e il cambio della scritta 
function win(userChoice,computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;

    result_p.innerHTML = convertWord(userChoice)+" " + "beats" + " " + convertWord(computerChoice) +". You win!"

    document.querySelector(".result>p").classList.remove('lose-title');

    document.querySelector(".result>p").classList.remove('draw-title');


    document.querySelector(".result>p").classList.add('win-title');
}

function lose(userChoice,computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertWord(userChoice)+" " + "loses to" + " " + convertWord(computerChoice) +". You lost!"

    document.querySelector(".result>p").classList.remove('win-title');

    document.querySelector(".result>p").classList.remove('draw-title');

    document.querySelector(".result>p").classList.add('lose-title');
}

function draw(userChoice,computerChoice) {
    result_p.innerHTML = convertWord(userChoice)+" " + "equals" + " " + convertWord(computerChoice) +". Its a draw!"

    document.querySelector(".result>p").classList.remove('win-title');

    document.querySelector(".result>p").classList.remove('lose-title');

    document.querySelector(".result>p").classList.add('draw-title');
}

// Funzione per la scelta del computer
function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber];
    
}

// Qua ci sarà tutta la logica inerente a far funzionare il gioco
function game(userChoice) {
   const computerChoice = getComputerChoice();


    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);   
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}



function main() {

    rock_div.addEventListener('click',function() {
        game("r")
    })
    paper_div.addEventListener('click',function() {
        game("p")
    })
    scissors_div.addEventListener('click',function() {
        game("s")
    })
}
main();