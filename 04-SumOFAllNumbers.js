// Implement a function to find the sum of all numbers in an array.

const sum = (array) => {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
};

console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2, 3, 4, 5, 24]));
