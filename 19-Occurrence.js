// Implement a function to count the occurrence of each character in a string.

let example = "Ernesto Alejandro Garcia Santana";

const counter = (string) => {
  string = string.toLowerCase();

  let regex = "abcdefghijklmnñopqrstuvwyxz";
  for (let i = 0; i <= regex.length - 1; i++) {
    let counter = 0;
    for (let j = 0; j <= string.length - 1; j++) {
      if (regex[i] === string[j]) {
        counter++;
      }
    }
    if (counter === 0) {
      continue;
    } else {
      console.log(`The string has ${counter} characters "${regex[i]}"`);
    }
  }
};

// counter(example);
// counter("alex");
counter("ernesto");
// counter("pepe");
