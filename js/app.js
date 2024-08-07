
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


// for (let sqr of squareEls) {
//     let currentCellId = sqr.id
//     console.log(currentCellId)
//     }



document.addEventListener('DOMContentLoaded', () => {
    squareEls.forEach((squareEl) => {
        squareEl.addEventListener('keydown', handleKeydown);

        function handleKeydown(event) {
            
            if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
                // Display the pressed key value in squareEL
                squareEl.textContent = event.key 
                
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

// NEXT write a function to disable typing once 5 letters are typed 


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

