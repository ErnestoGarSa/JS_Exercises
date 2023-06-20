// Create a function to find the second largest number in an array.

const secondLargest = (array) => {
  let first = 0;
  let second = 0;
  array.forEach((element) => {
    if (element >= first) {
      second = first;
      first = element;
    } else if (element < first && element >= second) {
      second = element;
    }
  });
  return second;
};

console.log(secondLargest([1, 6, 8, 2, 5, 7, 10, 56, 21]));
