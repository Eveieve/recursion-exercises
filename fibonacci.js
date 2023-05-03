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
