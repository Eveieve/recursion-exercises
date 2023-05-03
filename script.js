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

// let array = [];

// function fibsRec(n) {
//   if (n == 1) {
//     array = [0];
//     return array;
//   } else if (n == 2) {
//     array = [0, 1];
//     return array;
//   } else if (n >= 3) {
//     const newNum = fibsRec(n - 1).at(-2) + fibsRec(n - 1).at(-1);
//     fibsRec(n - 1).push(newNum);
//     return array;
//   }
// }
// console.log(fibsRec(10));

// 5. check all values in an array
// a function called all. accepts an array and a callback
// function all returns true, if every value in the array returns true

// function all(array, callback) {
//   if (array.every(callback)) return true;
//   else return false;
// }

// var allAreLessThanSeven = all([1, 2, 9], function (num) {
//   return num < 10;
// });

// console.log(allAreLessThanSeven); // false

// 6. write a function called productOfArray which takes in an array of numbers
// and returns the product of them all

// function productOfArray(array) {
//   return array.reduce((acc, curr) => acc * curr);
// }

// let sixty = productOfArray([1, 2, 3, 10]); // 60
// console.log(sixty);

// 7. sumRange
// iteratively
//  function sumRange(n) {
//   let total = 0;
//   for (let i =n; i > 0; i--) {
//     total += i
//   }
//   return total
// }

// recursively

// function sumRangeRecursive(n, total = 0) {

//   if (n <= 0) {
//     return total // the current total
//   }
//   return sumRangeRecursive(n-1, total + n);
// }

// sumRangeRecursive(3,0)
//   sumRangeRecursive(2,3) // call itself
//     sumRangeRecursive(1,5)
//       sumRangeRecursive(0, 6) // delegating the job to its parent
//       return 6 //
//     return 6  // returns what the last function call returns
//   return 6
// return 6

// 8. print out all children names.

// const tree = {
//   name: "John",
//   children: [
//     {
//       name: "Jim",
//       children: [],
//     },
//     {
//       name: "Zoe",
//       children: [
//         {
//           name: "kyle",
//           children: [],
//         },
//         {
//           name: "sophia",
//           children: [],
//         },
//       ],
//     },
//   ],
// };

// function printChildrenRecursive(t) {
//   if (t.children.length === 0) {
//     // if nested object to print out is 0
//     return;
//   }
//   t.children.forEach((child) => {
//     console.log(child.name);
//     printChildrenRecursive(child);
//   });
// }

// 9. Search JS object
// const nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             something: "foo2",
//           },
//         },
//       },
//     },
//   },
// };

// function contains(tree, value) {
//   for (const property in tree) {
//     if (typeof tree[property] === "object") {
//       return contains(tree[property], value); // repeat this if above condition is met
//     }
//     if (tree[property] == value) {
//       return true;
//     } else return false;
//   }
// }
// console.log(contains(nestedObject, 44)); // true
// // let doesntHaveIt = contains(nestedObject, "foo"); // false
array = [3, 2, 4, 0];
// merge sorted arrays.
let C = [];

// A and B are sorted in order.
function merge(A, B) {
  let m = A.length; // length of array A
  let n = B.length;
  let k = 0;
  let j = 0;
  let i = 0;
  console.log(A);
  console.log(B);
  while (i < m && j < n) {
    if (A[i] < B[j]) {
      C[k++] = A[i++];
      console.log(C);
    } else if (B[j] < A[i]) {
      console.log(C[k]);
      C[k++] = B[j++];
      console.log(C);
    }
    for (i < m; i++; ) C[k++] = A[i];
    for (j < n; j++; ) C[k++] = B[j];
  }
  return C; // return after copying all values.
}

function mergeSort(l, h, array) {
  if (array.length <= 1) return array;
  else if (array.length > 1) {
    const mid = Math.ceil((l + h) / 2);
    const leftArray = array.slice(l, mid);
    const rightArray = array.slice(mid, h);
    console.log(leftArray);
    console.log(rightArray);
    const sortedLeft = mergeSort(l, mid, leftArray);
    console.log(sortedLeft);
    const sortedRight = mergeSort(mid, h, rightArray);
    console.log(sortedRight);
    const mergedArray = merge(sortedLeft, sortedRight);
    // console.log(mergedArray);
    return mergedArray;
  }
}

console.log(mergeSort(0, 4, array));
// i was not storing !!!!!!!!
