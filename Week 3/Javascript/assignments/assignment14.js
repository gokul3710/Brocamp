var readlineSync = require("readline-sync");

// var a = [["1","2"],["3","4"]]
// console.log(a[0][1]);

let limit = parseInt(readlineSync.question("Enter the limit of array : "))
console.log("Enter the values of Array 1");

var array1 = [];
for(let i=0;i<limit;i++){
    var values = [];
    for(j=0;j<limit;j++){
        values[j] = parseInt(readlineSync.question(""))
    }
    array1[i]=values
}

console.log("Enter the values of Array 1");

var array2 = [];
for(let i=0;i<limit;i++){
    var values = [];
    for(j=0;j<limit;j++){
        values[j] = parseInt(readlineSync.question(""))
    }
    array2[i]=values;
}

console.log("Sum of two arrays are : ");


var array = [];
for(let i=0;i<limit;i++){
    let values = []
    for(j=0;j<limit;j++){
        values[j] = array1[i][j]+array2[i][j]
    }
    array[i]=values;
}

for(let i=0;i<limit;i++){
    console.log(...array[i]);
}


