const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
refreshBtn = document.querySelector(".refresh-word")

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];//getting the random obj from words
    let wordArray = randomObj.word.split("");// splitting each letterof random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting the random numbers
        // shuffling and swiping wordArray letter randomly
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //passing shuffle word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    console.log(randomObj);
}
initGame();

refreshBtn.addEventListener("click",initGame);
