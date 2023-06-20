// Create a program to find the largest and smallest numbers in an array.

const largestSmallest = (array) => {
  let largest = 0;
  let smallest = 0;

  array.forEach((element) => {
    if (element <= smallest) {
      smallest = element;
    } else if (element >= largest) {
      largest = element;
    }
  });
  return `The smallest number in the array is ${smallest} and the largest is ${largest}`;
};

console.log(largestSmallest([1, 2, 3, 4, 5, 101, 6, 7, 8, 9, -1, -65, 100]));
