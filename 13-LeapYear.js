// Write a program to check if a given year is a leap year.

const isLeap = (year) => {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
};

const isLeap2 = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year";
    }
  } else {
    return "Not leap year.";
  }
};

console.log(isLeap(2400));
console.log(isLeap(2000));
console.log(isLeap(2100));
console.log(isLeap(1989));
