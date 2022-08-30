// the oO stands for Object Oriented //

class Game {
    answer = null;
    guess = null;
    player = null;
    score = 0;
    time = 0;
    timer = null;
    isPlaying = false;
  
    start() {
      // Intro
      alert(
        "Gaze upon a crystal ball or otherwise access powers of prognostication!\n\nYou'll  be asked to guess a whole number between 1 and 100.\n\nGood luck!"
      );
  
      // generate random answer
      this.answer = this.generateNumber(1, 100);
  
      // change to is playing
      this.isPlaying = true;
  
      // timer starts counting
      this.timer = setInterval(() => {
        console.log("timer", this.time)
        this.time++;
      }, 1000);
  
      // player starts turn
      this.turns();
    }
  
    turns() {
      let userInput = prompt("Your guess:");
  
      if (userInput.toLowerCase() == "quit") {
        return this.end();
      }
  
      this.guess = parseInt(userInput);
  
      this.score++;
  
      if (isNaN(this.guess)) {
        alert("You didn't give me a valid number...");
      } else {
        if (this.guess > this.answer) {
          alert("Too high. Better luck next time!");
        } else if (this.guess < this.answer) {
          alert("Too low. Better luck next time!");
        } else {
          alert(`Congratulations, today is your lucky day!`);
  
          this.end();
        }
      }
  
      if (this.isPlaying) {
        this.turns();
      }
    }
     // timer stops and returns score and time 
    end() {
      alert(
        `You finished with a score of ${this.score} in ${this.time} seconds.`
      );
  
      clearInterval(this.timer);
      this.timer = null;
      this.score = 0;
      this.time = 0;
      this.isPlaying = false;
    }
  
    generateNumber(min = 1, max = 10) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
  
  new Game().start();