var readlineSync = require("readline-sync");

let array = [];

function getArray(){
    let array = [];
    let limit = parseInt(readlineSync.question("Enter the limit of array : "))
    console.log("Enter the values of Array");
    for(let i=0;i<limit;i++){
        array[i] = parseInt(readlineSync.question(""));
    }
    return array;
}

function displayArray(array){
    console.log(`The entered values are ${array}`);
}

array = getArray();
displayArray(array)




