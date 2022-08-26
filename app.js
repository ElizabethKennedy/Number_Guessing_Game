let min = 1;
let max = 100;
let rand = Math.floor(Math.random() * max) +1;
let isPlaying = true

while (isPlaying) {
    turn()
}
    function turn() {
    let input = prompt.textContent = `Hello, ${this.name}! Can you guess my favorite 
    number between ${min} and ${max}?.`
        
    
    
    Number.parseInt(prompt(`What is my favorite number between ${min} and ${max}?`)); 
    if (input < rand) {
        alert ("Too low. Better luck next time.");
        } else if (input > rand) {
        alert ("Too high. Better luck next time.");
        } else if (input == rand) {
        alert ("Congratulations! Today is your lucky day.");
        isPlaying = false;
        }  else {
        alert (`Please enter a valid number between ${min} and ${max}.`);
        
    }
}

prompt.textContent = `Hello, ${this.name}! Please select your preferred level of difficulty.`


let level = o;
let randomNumbers = [];
let easyLevel = [1];
let mediumLevel = [2];
let hardLevel = [3];

// select difficulty level //

function changeDifficulty(difficulty = 0){
    level = difficulty
    randomNumbers = [];

    if (level === 0) {
        randomNumbers.push(mediumLevel);
    } else if (level === 1) {
        randomNumbers.push(easyLevel);
    } else if (level === 2) {
        randomNumbers.push(mediumLevel);
    } else if (level === 3) {
        randomNumbers.push(hardLevel);
    }

}
console.log(randomNumbers);

getNumber();
    
// generate random number //

function getNumber() {
    let answer = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
    console.log(answer);
}
        //call functions //

        changeDifficulty();

        
    
    gameStart() 
        input.setAttribute("type", "number");
        input.min = "1";
        input.max = `${this.mode}`;
        prompt.textContent = `Guess a number between 1 and ${this.mode}!`
        this.rand = Math.floor(Math.random() * this.mode + 1);
        this.count = 7;
        info.textContent = `Guesses remaining: ${this.count}`;
        info.hidden = false;
        input.hidden = false;
        button.onclick = () => {
            this.guess(input.value);
        };
    
    guess(guess) {
        console.log(guess);
        if(guess == this.rand) {
            input.value = "";
            this.right();
        } else {
            input.value = "";
            this.wrong();
        }
    }
    right = luckyYou() {
        console.log("Lucky you!");
        
    }
    wrong = betterLuckNextTime() {
        console.log("Better Luck Next Time");
        
    }
    replay = wannaSpinAgain() {
        console.log("Wanna Spin Again?");

    }
