const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const rowEls = document.querySelectorAll('.row')
const submitButtonEl = document.querySelector('#submit')
const restartButtonEl = document.querySelector('#restart')
const targetWords = [ 'agree', 'whale', 'clear', 'clean', 'great', 'small'];
const randomWord = targetWords[Math.floor(Math.random() * targetWords.length)];

let userGuesses = [[], [], [], [], []]
let attempts = 5
let currentRowIndex = 0 
let nextRowStartIndex = currentRowIndex * 5

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSubmit()
    }
})
submitButtonEl.addEventListener('click', handleSubmit)

restartButtonEl.addEventListener('click', handleRestart)
squareEls.forEach((squareEl) => {
    squareEls[0].focus()
    squareEl.addEventListener('keydown', handleKeydown)
});



function handleRestart() {
    squareEls[0].focus();
    userGuesses = [[], [], [], [], []] 
    squareEls.forEach(squareEl => {
        squareEl.textContent = ''
        squareEl.style.backgroundColor = '#FEF3E2'
        squareEl.setAttribute('tabindex', 0)
    })
}

function handleKeydown(event) { 
    const squareEl = event.target;
    const squareIndex = Number(squareEl.id);
    if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
        squareEl.textContent = event.key
        squareEls[squareIndex+1]?.focus() 
            if (userGuesses[currentRowIndex].length < 5) {
                userGuesses[currentRowIndex].push(event.key)
                callForSubmit()
            }
            else {
                currentRowIndex++
                userGuesses[currentRowIndex].push(event.key)
                callForSubmit()
            }
    }
    else if (squareEl.textContent.length == 1 && event.key == 'Backspace') {
        squareEl.textContent = ''
    }
    else if (squareEl.textContent.length == 0 && event.key == 'Backspace') {
        squareEls[Number(event.target.id)-1].focus()
        squareEls[Number(event.target.id)-1].textContent = ''
    }
}


function callForSubmit() {
    if (userGuesses[currentRowIndex].length === 5) {
        messageEl.textContent = "SUBMIT YOUR GUESS"
        messageEl.classList.add('ask-submit')
        squareEls.forEach(squareEl => {
            squareEl.removeAttribute('tabindex')
        })
    }
}

function handleSubmit() {
    if (userGuesses[currentRowIndex]?.length === 5) {
        handleColors()   
        checkForWin()
    }
}

function checkForWin() {
        const guessedWord = userGuesses[currentRowIndex].join('')
        if (guessedWord === randomWord) {
            messageEl.textContent = "CONRATULATIONS! YOU GUESSED RIGHT!"
        }
        else {
            attempts--
            currentRowIndex++
            attemptEl.textContent = `Attempts: ${attempts}`;
            if (attempts > 0) {
                nextAttempt();
            }
            else {
                messageEl.textContent = "GAME OVER. The word was " + randomWord.toUpperCase();
            }
        }
    }

    function handleColors() {
        userGuesses[currentRowIndex].forEach((userGuessChar, index) => {
            const squareEl = squareEls[currentRowIndex * 5 + index]
            if (userGuessChar == randomWord[index]) {
                squareEl.style.backgroundColor = 'lightGreen'
            }
            else if (randomWord.includes(userGuessChar)) {
                squareEl.style.backgroundColor = 'Yellow'
            }
            else if (!randomWord.includes(userGuessChar)) {
                squareEl.style.backgroundColor = 'gray'
            }
    })
}
    
    
function nextAttempt() {
    nextRowStartIndex = currentRowIndex * 5
    messageEl.textContent = 'TRY AGAIN'
    squareEls.forEach((squareEl, index) => {
        if (index >= nextRowStartIndex && index < nextRowStartIndex + 5){
            squareEl.setAttribute('tabindex', 0)
        } 
    })
    squareEls[nextRowStartIndex].focus();
}