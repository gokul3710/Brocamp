
function myFilter(myArray: number[],callback: Function){
    if(callback(myArray)){
        console.log("The sum of the array numbers is even")
    }
    else{
        console.log("The sum of the array numbers is odd");
    }
}

function isEven(arr: number[]): boolean{
    let sum: number = 0
    for(let element of arr){
        sum+=element;
    };

    if(sum%2==0){
        return true;
    }else{
        return false;
    }
}

let arr: number[] = [3,32,432,42,34,2412,21,421,4,12]

myFilter(arr,isEven);