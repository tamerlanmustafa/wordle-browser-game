
// PSEUDOCODE

// // define a variable to set maximum attempts to 5-7
// // define a variable to access grid elements
// // define a variable called currentCell to store and modify clicked cell
// // define a variable to store target word/words
// // create an onscreen keyboard


// // create a render function
// // create an init function
// // create a startNewGameFunction
// // create a checkForMatch function to check the user guess against target word
// // create handleClick function
// // create updateBoard function to update UI on the page
// // create updateMessage function to message win/fail

/*-------------------------------- Constants/ Cached Elements--------------------------------*/

const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const rowEls = document.querySelectorAll('.row')
const submitButtonEl = document.querySelector('#submit')
const newGameButtonEl = document.querySelector('#new-game')

const attempts = 5
const userGuesses = [[], [], [], [], []]
const board = [
    '', '', '', '', '',
    '', '', '', '', '',    
    '', '', '', '', '',   
    '', '', '', '', '',    
    '', '', '', '', '',
]

const targetWords = ['smile']


// const currentCellId = () => {
//     for (let sqr of squareEls) {
//         let id 
//         return  id = sqr.id
//     }
// }

// console.log(currentCellId)



document.addEventListener('DOMContentLoaded', () => {
    squareEls.forEach((squareEl, index) => {
        squareEl.addEventListener('keydown', handleKeydown);

        function handleKeydown(event) {
            if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
                squareEl.textContent = event.key       
            } else if (squareEl.textContent.length == 1 && event.key == 'Backspace') {
                squareEl.textContent = ''
            }
        }
    });

    
})



/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/






/*----------------------------- Event Listeners -----------------------------*/






/*-------------------------------- Functions --------------------------------*/

function handleKeydown(event) {

}

function matchTarget(event) {
      
}



function init() {

}


function updateBoard() {
}



function updateMessage() {

}

