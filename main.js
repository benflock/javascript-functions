console.log('sanity check!'); // why?

// Explain what a function is conceptually

/* set of instructions, completes a task, reusable,
  can take arguments, usually returns something
*/

// Understand the difference between defining a function and calling a function

// function defintion
function sum(num1, num2) {
  console.log(num1 + num2);
}

// function call
var number1 = 1;
var number2 = 2;
// this function takes 2 numbers
// returns the sum
sum(number1, number2);

// function defintion
function math(num1, num2, operation) {
  console.log(operation);
  if(operation === 'add') {
    console.log(num1 + num2);
  } else {
    console.log(num1 - num2);
  }
}

// function call
var number1 = 1;
var number2 = 2;
// this function takes 2 numbers
// returns the sum
math(number1, number2);


// Write a function that takes parameters

// Write a function that returns a value

/*

A function, for the most part, should-

1. take something (argument)
2. do something (instructions)
3. return something

*/

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num3, num4) {
  return num3 - num4;
}

var answer = sum(2, 2);

subtract(2, answer);

// Design an experiment to demonstrate the difference between returning a value in a function and console.logging it

// experiment 1

function experiment1() {
  console.log('yay!');
}

var output = experiment1();

console.log(output);

// experiment 2

function experiment2() {
  return 'yay!';
}

var output2 = experiment2();

console.log(output2);



// Describe variable scope in JavaScript and how it relates to functions

var test = 'two';


function testingScope() {
  var test = 'one';
  console.log(test);
  return 'pass';
}

testingScope();
console.log(test);



// Understand the difference between declaring a function (function declaration) and defining a function (function expression)