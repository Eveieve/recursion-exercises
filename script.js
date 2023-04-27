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

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 4));
