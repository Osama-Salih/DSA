function fibonacciSequence(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(6));

// Big O(n*2)
