// Write a program to check if two strings are anagrams.

const isAnagram = (word, letters) => {
  let matches = 0;
  let totalChar = word.length;
  for (let i = 0; i < totalChar; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (word[i] === letters[j]) {
        matches++;
      }
    }
  }
  if (matches !== totalChar) {
    return false;
  } else {
    return true;
  }
};

console.log(isAnagram("bored", "robed"));
console.log(isAnagram("bored", "robes"));
console.log(isAnagram("dusty", "study"));
console.log(isAnagram("dusty", "stude"));
console.log(isAnagram("night", "thing"));
console.log(isAnagram("cat", "act"));
