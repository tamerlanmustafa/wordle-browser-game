
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
let currentRowIndex = 0
const userGuesses = [[], [], [], [], []]


const targetWords = ['smile']

document.addEventListener('DOMContentLoaded', () => {
    squareEls.forEach((squareEl) => {
        squareEl.addEventListener('keydown', handleKeydown);
         
        function handleKeydown(event) { 
            
            if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
                // Display the pressed key value in squareEL
                squareEl.textContent = event.key



                if (currentRowIndex < userGuesses.length) {

                    if (userGuesses[currentRowIndex].length < 5) {
                        // If current row is not full of 5 characters...
                        // ..then push the pressed key value into userGuesses ...
                        // ..array at that row's index
                        userGuesses[currentRowIndex].push(event.key)
                    } else {
                        currentRowIndex++
                        userGuesses[currentRowIndex].push(event.key)
                    }
                }

                // console.log(userGuesses)
                
                // Move focus to the next cell/sqr
                squareEls[Number(event.target.id)+1].focus()
            } else if (squareEl.textContent.length == 1 && event.key == 'Backspace') {
                squareEl.textContent = ''
            } else if (squareEl.textContent.length == 0 && event.key == 'Backspace') {
                // Move focus back to the previous cell and remove its content when backspace clicked
                squareEls[Number(event.target.id)-1].focus()
                squareEls[Number(event.target.id)-1].textContent = ''
            }
        }
    });

    // Focus first cell when DOM loads
    squareEls[0].focus()
})

function submit() {

    // if user typed first guess disable other cells to force submit
    if (userGuesses[currentRowIndex].length == 5) {
        
    }
}


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

