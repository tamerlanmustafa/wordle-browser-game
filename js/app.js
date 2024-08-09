// CONSTANTS //
const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const rowEls = document.querySelectorAll('.row')
// BUTTON ELEMENTS
const submitButtonEl = document.querySelector('#submit')
const newGameButtonEl = document.querySelector('#new-game')

const attempts = 5
const userGuesses = [[], [], [], [], []]
const targetWords = ['smile', 'agree']

// VARIABLES //
let currentRowIndex = 0 // identifies which row of 5 user is typing at


// CACHED ELEMENT REFERENCES

// Add handleSubmit function to submit button to check if user guess matches the target word 
submitButtonEl.addEventListener('click', handleSubmit)




document.addEventListener('DOMContentLoaded', () => {

    squareEls.forEach((squareEl) => {
        // Focus first cell when DOM loads
        squareEls[0].focus()
        // Add a keydown function to every square to retreive the pressed key value and display it on the browser
        squareEl.addEventListener('keydown', handleKeydown)
        function handleKeydown(event) { 
            // If the current square does not have a value and pressed key is one from the actual Alphabet, execute this code
            if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
                // Display the pressed key value in squareEL
                squareEl.textContent = event.key
                // Move focus to the next cell/sqr after current one gets a value
                squareEls[Number(event.target.id)+1].focus()
                // as long as currentRowIndex is not greater than 5 which is the length of ..
                // .. userGuesses array/number of rows on the boards, run the code inside
                if (currentRowIndex < userGuesses.length) {
                    // as long as current row does NOT have 5 characters...
                    // ..then push the pressed key value into userGuesses ...
                    // ..array at that row's index
                    if (userGuesses[currentRowIndex].length < 5) {
                        userGuesses[currentRowIndex].push(event.key)
                        callForSubmit()
                       
                        // if (userGuesses[currentRowIndex].indexOf(event.key) == 0) {
                        //     squareEl.style.backgroundColor = 'blue'
                        // }
                    }
                    // Once current row has 5 chars push most recently clicked key values into the next nested array
                    else {
                        currentRowIndex++
                        userGuesses[currentRowIndex].push(event.key)
                    }
                }
            }
            // if current square have a value and user clicks 'backspace' then remove its value
            else if (squareEl.textContent.length == 1 && event.key == 'Backspace') {
                squareEl.textContent = ''
            }
            // if current square does NOT have a value and user clicks 'backspace' then remove value of previous square
            else if (squareEl.textContent.length == 0 && event.key == 'Backspace') {
                // Move focus back to the previous cell and remove its content when backspace clicked
                squareEls[Number(event.target.id)-1].focus()
                squareEls[Number(event.target.id)-1].textContent = ''
            }
        }
    });
})


// FUNCTIONS
function callForSubmit() {
    // if user typed first guess/5 character disable other cells to force submit
    if (userGuesses[currentRowIndex].length === 5) {
        messageEl.textContent = "SUBMIT YOUR GUESS"
        messageEl.classList.add('ask-submit')
        
        // remove tabindex attribute from the next row in order to disable typing on the next row..
        // .. so that user knows they need to submit their current guess
        squareEls.forEach(squareEl => {
            squareEl.removeAttribute('tabindex')
            // Set the BG color of the next row to emphasize that it is disabled
            if (squareEl.textContent == '') {
                squareEl.style.backgroundColor = 'gray'
            }
        })
    } 
}

function handleColors() {
     // Check if the user guessed the character at the right index
     userGuesses[currentRowIndex].forEach((userGuessChar, index) => {
        // If the character user clicks is at the same index as the char from target word 
        if (userGuessChar == targetWords[currentRowIndex][index]) {
            squareEls[index].style.backgroundColor = 'lightGreen'
        }
        // If the character user clicks exists somewhere in the target word 
        else if (targetWords[currentRowIndex].includes(userGuessChar)) {
            squareEls[index].style.backgroundColor = 'Yellow'

        } else {
            // currentRowIndex++
        }
    })
}
function handleSubmit() {
    handleColors()
    // concat the user guess since it is in a nested array
    let guessedWord = userGuesses[currentRowIndex].join('')
    // compare user input with the target word
    if (guessedWord === targetWords[currentRowIndex]) {
        messageEl.textContent = "CONRATULATIONS! YOU GUESSED RIGHT!"
    }
    else {
        nextAttempt()
    }
    handleColors()

}

// function nextAttempt() {
//     messageEl.textContent = 'TRY AGAIN'

//     squareEls.forEach(squareEl => {
//         if (squareEl.textContent == '') {
//             squareEl.setAttribute('tabindex', 0)
//             squareEl.style.backgroundColor = 'var(--secondary-color)'
//         }
//     })
//     squareEls[5].focus()

//     // handleColors()

// }