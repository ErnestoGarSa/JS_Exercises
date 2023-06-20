// Write a program to remove falsy values from an array.

const falsy = (array) => {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(
  falsy([
    1,
    "hello",
    false,
    0,
    "",
    true,
    null,
    { name: "ernesto" },
    [1, 5],
    false,
  ])
);
