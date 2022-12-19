var readlineSync = require("readline-sync");

var limit,
  array = [];

limit = parseInt(readlineSync.question("Enter the limit of array : "));
console.log("enter the values of array");

for (let i = 0; i < limit; i++) {
  array[i] = parseInt(readlineSync.question(""));
}

for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
    if (array[i] > array[j]) {
      array[i] = array[i] + array[j];
      array[j] = array[i] - array[j];
      array[i] = array[i] - array[j];
    }
  }
}

console.log(`Sorted array is : ${array}`);
