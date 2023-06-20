// Implement a function to check if a given number is prime.

const isPrime = (number) => {
  for (let i = 1; i <= 100; i++) {
    if (number % i === 0) {
      if (i !== 1 && i !== number) {
        return "Not Prime";
      }
    } else {
      return "Prime";
    }
  }
};

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(13));
console.log(isPrime(1009));
console.log(isPrime(10007));
