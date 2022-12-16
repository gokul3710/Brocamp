var readlineSync = require('readline-sync');

let limit = parseInt(readlineSync.question("Enter a limit : "));
let flag = 0
let sum = 0


for(let i=1 ; i<=limit; i++){
    if(i%2 != 0){
        sum += i;
    }
}

console.log(`Sum of Odd numbers upto ${limit} is ${sum}`);