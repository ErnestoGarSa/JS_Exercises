// Write a function to remove duplicates from an array.

const duplicates = (array) => {
  let cleanArray = [];

  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= cleanArray.length; j++) {
      if (array[i] !== cleanArray[j]) {
        cleanArray.push(array[i]);
      }
    }
    return cleanArray;
  }
};

console.log(duplicates([1, 1, 8]));
