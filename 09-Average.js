// Implement a function to find the average of numbers in an array.

const average = (array) => {
  let total = 0;

  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  let ave = total / array.length;
  return ave;
};

console.log(average([10, 9, 5, 6, 9]));
