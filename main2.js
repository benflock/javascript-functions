// // before hoisting

// test();

// var test = function() {
//   return 'test';
// };


// test2();

// function test2() {
//   return 'test';
// }



// // after hoisting

// var test = undefined;

// function test2() {
//   return 'test';
// }


// test()
// test2();

// test = function() {
//   return test;
// }