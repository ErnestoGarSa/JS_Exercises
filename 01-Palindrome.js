// Write a function to check if a given string is a palindrome.

const palindrome = (string) => {
  if (string === string.split("").reverse().join("")) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
};

console.log(palindrome("mom"));
console.log(palindrome("radar"));
