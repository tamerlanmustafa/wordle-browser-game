// CONSTANTS //
const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const rowEls = document.querySelectorAll('.row')
// BUTTON ELEMENTS
const submitButtonEl = document.querySelector('#submit')
const newGameButtonEl = document.querySelector('#new-game')

const userGuesses = [[], [], [], [], []]
const targetWords = [ 'agree', 'whale', 'clear', 'clean'];
const randomWord = targetWords[Math.floor(Math.random() * targetWords.length)];



// VARIABLES //
let attempts = 5
let currentRowIndex = 0 // identifies which row of 5 user is typing at
let nextRowStartIndex = currentRowIndex * 5 // identifies the starting index at the next row


// CACHED ELEMENT REFERENCES

// Add handleSubmit function to submit button to check if user guess matches the target word 
submitButtonEl.addEventListener('click', handleSubmit)




document.addEventListener('DOMContentLoaded', () => {

    squareEls.forEach((squareEl) => {
        // Focus first cell when DOM loads
        squareEls[0].focus()
        // Add a keydown function to every square to retreive the pressed key value and display it on the browser
        squareEl.addEventListener('keydown', handleKeydown)

    });
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSubmit()
    }
})

function handleKeydown(event) { 
    const squareEl = event.target;
    const squareIndex = Number(squareEl.id);
    // If the current square does not have a value and pressed key is one from the actual Alphabet, execute this code
    if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
        // Display the pressed key value in squareEL
        squareEl.textContent = event.key
        // Move focus to the next cell/sqr after current one gets a value
        squareEls[squareIndex+1]?.focus() // ChatGpt help here with the ? mark
            // as long as current row does NOT have 5 characters...
            // ..then push the pressed key value into userGuesses ...
            // ..array at that row's index
            if (userGuesses[currentRowIndex].length < 5) {
                userGuesses[currentRowIndex].push(event.key)
                callForSubmit()
            }
            // Once current row has 5 chars push most recently clicked key values into the next nested array
            else {
                currentRowIndex++
                userGuesses[currentRowIndex].push(event.key)
                callForSubmit()
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
        })
    } 
}




function handleSubmit() {
        
    if (userGuesses[currentRowIndex].length === 5) {
        handleColors()   
        checkForWin()
    }
    
}

function checkForWin() {
        // concat the user guess since it is in a nested array
        const guessedWord = userGuesses[currentRowIndex].join('')
        // compare user input with the target word
        if (guessedWord === randomWord) {
            messageEl.textContent = "CONRATULATIONS! YOU GUESSED RIGHT!"
        } else {
            attempts--
            currentRowIndex++
            attemptEl.textContent = `Attempts: ${attempts}`;
            if (attempts > 0) {
                nextAttempt();
            }else {
                messageEl.textContent = "GAME OVER. The word was " + randomWord;
            }
        }
    }

function handleColors() {
        // Check if the user guessed the character at the right index
        userGuesses[currentRowIndex].forEach((userGuessChar, index) => {
            const squareEl = squareEls[currentRowIndex * 5 + index]
            // If the character user clicks is at the same index as the char from target word 
            if (userGuessChar == randomWord[index]) {
                squareEl.style.backgroundColor = 'lightGreen'
            }
            // If the character user clicks exists somewhere in the target word 
            else if (randomWord.includes(userGuessChar)) {
                squareEl.style.backgroundColor = 'Yellow'
            } else if (!randomWord.includes(userGuessChar)) {
                squareEl.style.backgroundColor = 'gray'
            }
    })
}
    
    
function nextAttempt() {
    nextRowStartIndex = currentRowIndex * 5
    messageEl.textContent = 'TRY AGAIN'
    // attempts--
    squareEls.forEach((squareEl, index) => {
        if (index >= nextRowStartIndex && index < nextRowStartIndex + 5){
            squareEl.setAttribute('tabindex', 0)
        } 
    })
    squareEls[nextRowStartIndex].focus();

}