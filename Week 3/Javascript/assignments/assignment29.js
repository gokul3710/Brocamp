var readlineSync = require("readline-sync");


function myFilter(myArray,callback){
    if(callback(myArray)){
        console.log("The sum of the array numbers is even")
    }
    else{
        console.log("The sum of the array numbers is odd");
    }
}

function isEven(arr){
    let sum = 0
    arr.forEach(element => {
        sum+=element;
    });

    if(sum%2==0){
        return true;
    }else{
        return false;
    }
}

arr = [3,32,432,42,34,2412,21,421,4,12]

myFilter(arr,isEven);