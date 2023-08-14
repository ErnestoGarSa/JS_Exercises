// Create a function to flatten a nested array.

const flattenArray = (array) => {
  return array.flat(Infinity);
};

console.log(flattenArray([1, [2, [3], 4, [5, 6, [7]]]]));
