let wordsPool = ["JAVASCRIPT", "DATABASE", "WEBDESIGN", "BACKEND", "FRONTEND", "DEBUGGING", "SOFTWARE", "HARDWARE", "ALGORITHM"];
let chosenWord = wordsPool[Math.floor(Math.random() * wordsPool.length - 1)];
let hiddenWord = [];
let noLives = 7;

function displayHiddenWord() {
    for (let i = 0; i < chosenWord.length; ++i) {
        hiddenWord[i] = "_";
        document.getElementById('guessfield').innerHTML += `${hiddenWord[i]} `;
    }
    updateDisplayedWord();
}

//display a random word (from the array above) on page load
displayHiddenWord()

//check the guessed letter
function checkLetter() {
    let searchLetter = document.getElementById('guessLetter').value.toUpperCase();
    document.getElementById("guessLetter").value = "";
    let isInWord = 0;
    for (let i = 0; i < chosenWord.length; ++i) {
        if (searchLetter === chosenWord[i]) {
            hiddenWord[i] = searchLetter;
            updateDisplayedWord();
            isInWord = 1;
        }
    }
    if (isInWord === 0) {
        let generateWrongLetters = document.getElementById("displayWrongLetters");
        let letter = document.createTextNode(" " + searchLetter);
        generateWrongLetters.appendChild(letter);
        --noLives;
        if (noLives === 0) {
            document.getElementById('outputMessage').innerHTML = `<h1>YOU LOST :( Try again</h1>`;
        }
    }
}

function updateDisplayedWord() {
    document.getElementById('guessfield').innerHTML = "";
    for (let i = 0; i < chosenWord.length; ++i) {
        document.getElementById('guessfield').innerHTML += `${hiddenWord[i]} `;
    }
    if (noLives > 0 && hiddenWord.every((value, index) => value === chosenWord[index])) {
        document.getElementById('outputMessage').innerHTML = `<h1>CONGRATULATIONS, YOU WON!!!</h1>`;
    }
}
