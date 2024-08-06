
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
const userGuesses = [['s', 'm', 'i', 'l', 'e'], [], [], [], []]
const targetWords = ['salam']


/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/






/*----------------------------- Event Listeners -----------------------------*/



for (let i = 0; i < squareEls.length; i++) {
    squareEls[i].addEventListener('keydown', handleKeydown)
}




/*-------------------------------- Functions --------------------------------*/

function handleKeydown(event) {
    const currentCell = event.target
    const nextCell = document.getElementById(Number(event.target.id)+1)
    const pressedKey = event.key


    if (currentCell.textContent.length == 0) {
        // Assign the pressed key value from keyboard to the currently focused sqr div
        currentCell.textContent = pressedKey
    } else {
        // Once currentCell has at least 1 char or is not empty then focus shifts to the next cell 
        nextCell.focus()
        nextCell.textContent = pressedKey

    }
}   



function render() {

}



function updateMessage() {

}