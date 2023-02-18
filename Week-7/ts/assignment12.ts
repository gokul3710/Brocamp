import read from 'readline-sync';

let limit: number = +read.question("Enter the limit of the array : ")
let array: number[] = new Array(limit)
for (let i: number = 0; i < limit; i++) {
    array[i] = +read.question('');
}

console.log(arraySort(array));


function arraySort(array: number[]){
    if(array.length == 0 || array.length == 1){
        return array
    }

    let mid: number = Math.floor(array.length/2)
    let left: number[] = array.slice(0,mid)
    let right: number[] = array.slice(mid)
    return sort(left,right)
}

function sort(left: number[], right: number[]) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}