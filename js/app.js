
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

/*-------------------------------- Constants --------------------------------*/

const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const submitButtonEl = document.querySelector('#submit')
const newGameButtonEl = document.querySelector('#new-game')


const attempts = 5
const userGuesses = [[], [], [], [], []]


/*---------------------------- Variables (state) ----------------------------*/


squareEls.forEach(squareEl => {
    squareEl.addEventListener('click', handleClick)
})

function handleClick(squareEl) {
    squareEl.style.backgroundColor = 'red'
}


/*------------------------ Cached Element References ------------------------*/






/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/




function render() {

}

function updateMessage() {

}


function updateMessage() {

}