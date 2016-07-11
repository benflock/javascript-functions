# Intro to Functions in JavaScript

Objectives:

1. Explain what a function is conceptually
1. Understand the difference between defining a function and calling a function
1. Write a function that takes parameters
1. Write a function that returns a value
1. Describe variable scope in JavaScript and how it relates to functions
1. Understand the difference between declaring a function (function declaration) and defining a function (function expression)
1. Explain hoisting

## What is a function?

Functions are reusable blocks of code designed to achieve a specific task. They should have a single defined purpose. In other words, they should do one thing - and one thing only.

## Defining a function

```javascript
var greet = function() {
  console.log('Hello World');
};

greet();
```

## Defining a function with a parameter

1. *Parameters* are the variable names you use when defining a function - `function myFunction(thing1, thing2)`
1. *Arguments* are the values that you supply to a function when you call it - `myFunction(32, true)`;

```javascript
var greeting = function(someName) {
  // anything inside of here will execute when called
  console.log('Good morning ' + someName);
};

var name = 'Momo';
var name2 = 'Rusty';
greeting(name);
greeting(name2);
```

Parts of a function:

1. `function` keyword
1. Name of the function - `greet`
1. Parameters - `someName`
1. Instructions - `console.log('Good morning ' + someName);`

Functions can take and deal with optional arguments. If you do not provide an argument that the function is expecting, JavaScript will set that parameter to undefined.

```javascript
function power(base, exponent) {
  if (exponent === undefined) {
    exponent = 2;
  }
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
```

## Why use functions?

Let's start by greeting some instructors:

```javascript
var instructorOne = 'Wes';
var instructorTwo = 'Ben';

console.log('Hello ' + instructorOne);
console.log('Hello ' + instructorTwo);
```

Now let's greet some students:

```javascript
var studentOne = 'David';
var studentTwo = 'Liz';

console.log('Hello ' + studentOne);
console.log('Hello ' + studentTwo);
```

Ask yourself?

1. Did we repeat ourselves in our code?
1. Can we make our code simpler?
1. Can we make our code easier to maintain?

![](http://codyburleson.com/wp-content/uploads/2014/11/dontrepeatyourself_motivator_2.jpg)

We can avoid re-writing the same code by placing the repeated code inside of a function:

```javascript
var greeter = function(person) {
  console.log('Hello ' + person);
};

// Greet some instructors
greeter('Wes');
greeter('Ben');

// Greet some students
greeter('David');
greeter('Liz');
```

## Returning values

Instead of printing to the console, we can use `return` to return a value:

```javascript
var sum = function(x,y) {
  return x + y;
}
```

## Exercise

Design an experiment to demonstrate the difference between returning a value in a function and console.logging it

## Variable scope

Scope is availability. Put another way, it is simply the duration for which a variable exists. JavaScript has two scopes - global and local. Global variables exist for the duration of a program, while variables scoped to functions (local) exist for the life of that function.

What's the result of running the following code?

```javascript
var sum = function(num1, num2) {
 var result = num1 + num2
 return result
}

sum(4, 5)
console.log(result)
```

What about this code?


```javascript
var greeting = 'Hello Galvanize';

var scoped = function(name) {
  // what's happening here?
  greeting = 'Hello ' + name + '!';
  return greeting;
};

var result = scoped('Michael');

console.log(result);
console.log(greeting); // What will the output of this line be?
```

Be careful with the global scope. Do not overuse it. There are memory ramifications. What about code collaboration? Think about the ramifications of exposing too much...

## Practice

Instructions:

1. Create a blank, valid HTML5 document.
1. Create a JavaScript file
1. Solve each of the given problems, creating a function that *returns* the value. Then output the result of the function to the JavaScript console.

Example:

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

Problems:

1. Define a function called `sum` that takes two numbers as arguments and returns their sum.
1. Define a function called `isEqual` that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
1. Define a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

## Function Declarations vs Function Expressions

Function declarations define a function without variable assignment:

```javascript
function foo() {
  return 'foo'
}
```

Meanwhile, function expressions define a function with variable assignment:

```javascript
var variableName = function() {
  return 'bar'
}
```

In most cases they can be used interchangeably, but each is treated differently when the JavaScript is interpreted due to hoisting...

## Hoisting

Much happens behind the scenes when JavaScript is interpreted. Hoisting, which moves declarations (just declarations, not assignments) to the top of the scope, is just one of them. With regard to functions..

**Function Declarations are hoisted completely.**

The entire function is moved to the top of the scope, allowing you to call a function before it has been declared:

```javascript
addTwo(2);

function addTwo(num) {
  console.log(parseInt(num) + 2);
}
```

What's really happening?

```javascript
// moved to the top
function addTwo(num) {
  console.log(parseInt(num) + 2);
}

addTwo(2);
```

**Function Declarations are NOT hoisted completely.**

The declaration is hosted but the assignment is not:

```javascript
addTwo(2);

var addTwo = function(num) {
  console.log(parseInt(num) + 2);
}
```

What's really happening?


```javascript
// moved to the top
var addTwo;
addTwo(2);
// left in place
addTwo = function(num) {
  console.log(parseInt(num) + 2);
}
```

Why would you ever want to use function declaration syntax? There are a few benefits, but for now stick with expressions.

## Exercise

Pair with a student to review the objectives using:

1. Explain what a function is conceptually
1. Understand the difference between defining a function and calling a function
1. Write a function that takes parameters
1. Write a function that returns a value
1. Describe variable scope in JavaScript and how it relates to functions
1. Understand the difference between declaring a function (function declaration) and defining a function (function expression)
1. Explain hoisting

Show examples of each using comments to write out anything conceptually as needed.