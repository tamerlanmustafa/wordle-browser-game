const attemptEl = document.querySelector('#attempts')
const instructionsEl = document.querySelector('#instructions')
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const rowEls = document.querySelectorAll('.row')
const submitButtonEl = document.querySelector('#submit')
const restartButtonEl = document.querySelector('#restart')
const targetWords = [ 'agree', 'whale', 'clear', 'clean', 'great', 'small'];
let randomWord = targetWords[Math.floor(Math.random() * targetWords.length)];

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
    squareEl.addEventListener('keydown', handleKeydown)
});
squareEls[0].focus()



function handleRestart() {
    randomWord = targetWords[Math.floor(Math.random() * targetWords.length)]
    userGuesses = [[], [], [], [], []] 
    attempts = 5
    currentRowIndex = 0
    nextRowStartIndex = 0
    attemptEl.textContent = `Attempts: ${attempts}`
    messageEl.textContent = ""
    
    squareEls.forEach(squareEl => {
        squareEl.textContent = ''
        squareEl.style.backgroundColor = '#FEF3E2'
        squareEl.setAttribute('tabindex', 0)
    })
    squareEls[0].focus()
}


function handleKeydown(event) { 
    const squareEl = event.target;
    const squareIndex = Number(squareEl.id);
    if (squareEl.textContent.length == 0 && /^[a-zA-Z]$/.test(event.key)) {
        squareEl.textContent = event.key
        squareEls[squareIndex+1]?.focus() 
            if (userGuesses[currentRowIndex].length < 5) {
                squareEl.textContent = event.key
                userGuesses[currentRowIndex].push(event.key)
                squareEls[squareIndex + 1]?.focus()
                callForSubmit()
            }
        
    }
    else if (squareEl.textContent.length == 1 && event.key == 'Backspace') {
        squareEl.textContent = ''
        const i = userGuesses[currentRowIndex].length - 1
        if (i >= 0) userGuesses[currentRowIndex].pop()
    }
    
    else if (squareEl.textContent.length == 0 && event.key == 'Backspace') {
        const prevIndex = Number(squareEl.id) - 1
        if (prevIndex >= currentRowIndex * 5) {
            squareEls[prevIndex].focus()
            squareEls[prevIndex].textContent = ''
            userGuesses[currentRowIndex].pop()
        }
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