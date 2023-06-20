// Write a program to reverse the order of words in a given sentence.

const reverse = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};

console.log(reverse("Hi my name is Ernesto"));
