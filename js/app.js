'use strict';

let userName = prompt("What is your name?");
alert("Welcome " + userName + "! Let's play a guessing game!")

let origin = prompt("Am I from Seattle?").toLowerCase();
// console.log("origin: ", origin)
if (origin === "yes" || origin === "y") {
  alert("Congrats that's correct!");
} else {
  alert("Sorry, that's wrong.");
}

let color = prompt("Is my favorite color blue?").toLowerCase();
// console.log("color: ", color)
if (color === "no" || color === "n") {
    alert("Congrats, that is correct!");
} else {
    alert("Sorry, that's wrong");
    }



let college =prompt("Did I go to WSU for college?").toLowerCase();
// console.log("college: ", college)
if (college === "yes" || college === "y") {
    alert("Congrats, that's correct!");
} else {
    alert("Sorry, that's wrong");
}



let dog =prompt("Do I have a dog").toLowerCase();
// console.log("dog: ", dog)
if (dog === "yes" || dog === "y") {
    alert("Congrats that is correct!");
} else {
    alert("Sorry, that is wrong");
}



let soda =prompt("Is Diet Mt Dew my favorite soda?").toLowerCase();
// console.log("soda: ", soda)
if (soda === "yes" || soda === "y") {
    alert("congrats, that is correct!");
} else {
    alert("Sorry, that is wrong");
}


let number =prompt("I'm thinking of a number between 1 and 100. Can you guess it??")
let attempts = 0
let correctAnswer = 68

while(attempts<=4) {
  if (number===correctAnswer) {
      alert("Congrats, thats correct!")
      break
  } else {
      alert("Sorry, try again.")
      attempts++
  }
}




// for(let i = 0; i <= 4; i++) {
//     if (number===correctAnswer) {
//         alert("Congrats, thats correct!")
//         break
//     } else {
//         alert("Sorry, try again.")
//         i++
//     }
// }