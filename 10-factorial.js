#!/usr/bin/node
const n = parseInt(process.argv[2]);

function factorial(x) {
  if (isNaN(x)) return 1;      // Factorial of NaN is 1
  if (x <= 1) return 1;        // 0! = 1, 1! = 1, and negative -> 1 per spec
  return x * factorial(x - 1);
}

console.log(factorial(n));
