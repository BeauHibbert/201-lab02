'use strict';

let correct = 0;

function lab02() {

  let userName = prompt("What is your name?");
  alert("Welcome " + userName + "! Let's play a guessing game!")

  let origin = prompt("Am I from Seattle?").toLowerCase();
  // console.log("origin: ", origin)
  if (origin === "yes" || origin === "y") {
    alert("Congrats that's correct!");
    correct++;
  } else {
    alert("Sorry, that's wrong.");
  }

  let color = prompt("Is my favorite color blue?").toLowerCase();
  // console.log("color: ", color)
  if (color === "no" || color === "n") {
      alert("Congrats, that is correct!");
      correct++;
  } else {
      alert("Sorry, that's wrong");
      }



  let college =prompt("Did I go to WSU for college?").toLowerCase();
  // console.log("college: ", college)
  if (college === "yes" || college === "y") {
      alert("Congrats, that's correct!");
      correct++;
  } else {
      alert("Sorry, that's wrong");
  }



  let dog =prompt("Do I have a dog").toLowerCase();
  // console.log("dog: ", dog)
  if (dog === "yes" || dog === "y") {
      alert("Congrats that is correct!");
      correct++;
  } else {
      alert("Sorry, that is wrong");
  }



  let soda =prompt("Is Diet Mt Dew my favorite soda?").toLowerCase();
  // console.log("soda: ", soda)
  if (soda === "yes" || soda === "y") {
      alert("congrats, that is correct!");
      correct++;
  } else {
      alert("Sorry, that is wrong");
  }

  let userGuess = parseInt(prompt("I'm thinking of a number between 1 and 100. Can you guess it??"));
  let attempts = 0;
  let correctAnswer = 68;
  
  while ((userGuess !== correctAnswer) && (attempts < 3)){
    if(userGuess<correctAnswer) {
      userGuess = prompt("That number is too low of a guess, try again.");
      attempts++;
    } else if(userGuess>correctAnswer) {
      userGuess = prompt("That number is too high, guess again.");
      attempts++;
    }
  }

  if (userGuess === correctAnswer) {
    alert('You got it right!')
    correct++;
  }

  if (userGuess !== correctAnswer && attempts === 3) {
    alert("Sorry, out of guesses. The correct answer was 68.")
  } 

  let correctAnswers = ["washington", "idaho", "oregon", "california", "pennsylvania"];
  let maxAttempts = 6;
  let gotIt = false;

  for(let i=0; i < maxAttempts; i++) {
    let guessedState = prompt("What states have I been to?").toLowerCase();
    for(let j=0; j < correctAnswers.length; j++) {
      let currentState = correctAnswers[j];
      if(guessedState === currentState){
        alert("You Got It!");
        correct++;
        gotIt = true;
        break;
      }
    }

    if(gotIt) {
      break;
    }
  }
  alert(correctAnswers)
  


}

console.log('you got ' + correct + ' out of seven questions correct!');

//Execution order:
lab02();
// numberGuessingGame();
