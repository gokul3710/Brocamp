import read from 'readline-sync'

let num : number = +read.question('Enter a Number : ')
for(let i: number = 1 ; i <= 10 ; i++ ){
    console.log(`${num} x ${i} = ${num*i}`);
}