'use strict'

var display;

// In the original game of Fizz Buzz, you count from 1 to a given number(let 's say 100). 
function fizzBuzz(element_id) {

  display = document.getElementById(element_id);
  display.innerHTML = "";

  for (var x = 1; x <= 100; x++) {
    //And finally if it 's divisible by both 3 and 5, you say "fizz buzz". 
    if (is_divisibleBy_3(x) && is_divisibleBy_5(x)) {
      console.log("fizz buzz");
      Display("fizz buzz");
    }
    //If it 's divisible by 3, instead of the number you say "fizz". 
    else if (is_divisibleBy_3(x)) {
      console.log("fizz");
      Display("fizz");
    }
    //If it's divisible by 5, you say "buzz".
    else if (is_divisibleBy_5(x)) {
      console.log("buzz");
      Display("buzz");
    }
    //For each number if it's not divisible by 3 or 5, you simply say the number.
    else {
      console.log(x);
      Display(x);
    }

  }
}


function is_divisibleBy_3(num) {
  return ((num % 3) === 0) || false;
}

function is_divisibleBy_5(num) {
  return ((num % 5) === 0) || false;
}

function Display(text) {
  display.innerHTML += '<p>' + text + '</p>';
}
