import read from 'readline-sync';

function main(){
    let arr : number[] = []
    arr = getArray(arr)
    displayArrray(arr)
}

function getArray(arr: number[]): number[]{
    let limit: number = +read.question("Enter the limit : ")
    for (let i = 0; i < limit; i++) {
        arr[i] = +read.question('')        
    }
    return arr
}


function displayArrray(arr: number[]){
    console.log(...arr)
}

main()