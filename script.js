// // 1. Sum all numbers

// function sumRange(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n + sumRange(n - 1);
//   }
// }

// console.log(sumRange(6));

// 2. Power function
// takes in a base and an exponent. If the exponent is 0, return 1.

// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 4));

// 3. calculate factorial.
// write a function that returns the factorial of a number.

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

// 4. fibonacci sequence

let array = [];

function fibsRec(n) {
  if (n == 1) {
    array = [0];
    return array;
  } else if (n == 2) {
    array = [0, 1];
    return array;
  } else if (n >= 3) {
    const newNum = fibsRec(n - 1).at(-2) + fibsRec(n - 1).at(-1);
    fibsRec(n - 1).push(newNum);
    return array;
  }
}
console.log(fibsRec(10));
