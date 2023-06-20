// Implement a function to find the factorial of a given number.

const factorial = (number) => {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};

console.log(factorial(5));
console.log(factorial(6));
