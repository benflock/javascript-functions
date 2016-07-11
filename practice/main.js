console.log('sanity check!');

/*

Define a function called sum that takes two numbers as arguments and returns their sum.

*/

function sum(num1, num2) {
  return num1 + num2;
}

var resultSum = sum(1, 2);

console.log(resultSum === 3); // => true
console.log(resultSum === 2); // => false

/*

Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

*/

console.log('//////////');

function isEqual(arg1, arg2) {
  if(arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(1, 1)); // => true
console.log(isEqual(1, 2)); // => false
console.log(isEqual(1, '1')); // => false
console.log(isEqual('one', 'one')); // => true

/*

Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

*/

// define a function called discountPercentage
// arguments => original, discount (0 - 100)
// instructions
  // test to see if discount is less than 100 and greater than 0
    // if true
      // math => calculate percentage and return
    // if false
      // return 'warning'
// returned => total discount

