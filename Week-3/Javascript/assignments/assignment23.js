let readlineSync = require("readline-sync");

class array {
  main() {
    let [limit, array1, array2] = this.getArray();
    let sumArray = this.addArray(limit, array1, array2);
    this.displayArray(limit, sumArray);
  }

  getArray() {
    let limit = Number(readlineSync.question("Enter the limit of array : "));
    console.log("Enter the values of Array 1");

    let array1 = [];
    for (let i = 0; i < limit; i++) {
      let values = [];
      for (let j = 0; j < limit; j++) {
        values[j] = parseInt(readlineSync.question(""));
      }
      array1[i] = values;
    }

    console.log("Enter the values of Array 2");

    let array2 = [];
    for (let i = 0; i < limit; i++) {
      let values = [];
      for (let j = 0; j < limit; j++) {
        values[j] = parseInt(readlineSync.question(""));
      }
      array2[i] = values;
    }

    return [limit, array1, array2];
  }

  addArray(limit, array1, array2) {
    let array = [];
    for (let i = 0; i < limit; i++) {
      let values = [];
      for (let j = 0; j < limit; j++) {
        values[j] = array1[i][j] + array2[i][j];
      }
      array[i] = values;
    }

    return array;
  }

  displayArray(limit, array) {
    console.log("Sum of two arrays are : ");

    for (let i = 0; i < limit; i++) {
      console.log(...array[i]);
    }
  }
}

let arr = new array();
arr.main();
