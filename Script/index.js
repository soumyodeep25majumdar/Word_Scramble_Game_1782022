const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime>0){
            maxTime--; //decrement maxTime by -1
            return timeText.innerText = maxTime;
        } 
        clearInterval(timer);  
        alert(`Time off! ${correctWord.toUpperCase()} is correct word`); 
        initGame(); // calling initGame funtion, so the game restart 
    }, 1000);
}

const initGame = () => {
    initTimer(30); // calling innerTimer function with passing 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)];//getting the random obj from words
    let wordArray = randomObj.word.split("");// splitting each letterof random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting the random numbers
        // shuffling and swiping wordArray letter randomly
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //passing shuffle word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase();// passing random word to correct word
    inputField.value="";    //making input field empty
    inputField.setAttribute("maxlength",correctWord.length); //setting max length attr value to word length
    
    // console.log(randomObj);
}
initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase(); //GETTING USER VALUE 
    if(!userWord) return alert("Please enter a word to check!!!"); // if user didn't enter anything 

    // if user word dosen't match with the correct word
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); 
    
    // if user word dose match with the correct word
    alert(`Congrats! ${userWord.toUpperCase()} is correct word`);
    
    initGame();
} 
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
