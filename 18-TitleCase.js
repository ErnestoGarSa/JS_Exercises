// Implement a function to convert a string to title case.

const toTitleCase = (string) => {
  let newArray = [];
  let strArray = string.split(" ");
  strArray.forEach((element) => {
    element = element.charAt(0).toUpperCase() + element.slice(1);
    newArray.push(element);
  });
  return newArray.join(" ");
};

console.log(toTitleCase("ernesto alejandro"));
console.log(toTitleCase("play station"));
console.log(toTitleCase("red bull racing team"));
