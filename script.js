// 1. Sum all numbers

function sumRange(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

console.log(sumRange(6));