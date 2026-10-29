/* B1. Algorithm / Logic Test


2. Write a function for the Fibonacci sequence, for example:
Fibonacci(5) // returns [0, 1, 1, 2, 3]
Fibonacci(13) // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...] */


function* fibonacciGenerator() {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

function fibonacci(n) {
    const gen = fibonacciGenerator();
    const result = [];

    for (let i = 1; i <= n; i++) {
    result.push(gen.next().value);
    }
    return result;
}

console.log(fibonacci(5));
console.log(fibonacci(13));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/toArray