// Write a function to find the Fibonacci sequence up to a given number.

const fibonacci = (length) => {
  let fibo = [0, 1];
  if (length === 1) {
    return [0];
  } else if (length === 2) {
    return fibo;
  } else if (length > 2) {
    while (fibo.length < length) {
      fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
    }
  }
  return fibo;
};
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(15));
