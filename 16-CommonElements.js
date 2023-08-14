// Write a program to find the common elements between two arrays.

const commonElements = (array1, array2) => {
  let commons = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        commons.push(array1[i]);
      }
    }
  }
  return commons;
};

console.log(commonElements([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(commonElements([1, 2], [1, 2, 3, 5]));
console.log(commonElements([3, 4], [1, 2, 3, 5]));
console.log(commonElements([1, 2, 3, 4], [6, 5, 7, 8]));
console.log(commonElements([1, 2, 3, 4], [-1, -2, -3, -4]));
