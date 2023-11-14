// Create a program to find the largest and smallest numbers in an array.

const largestSmallest = (array) => {
  let largest = array[0];
  let smallest = array[0];

  array.forEach((element) => {
    if (element <= smallest) {
      smallest = element;
    } else if (element >= largest) {
      largest = element;
    }
  });
  return `The smallest number in the array is ${smallest} and the largest is ${largest}`;
};

console.log(largestSmallest([1, 2, 5, -1, 4, 10, -4]));
