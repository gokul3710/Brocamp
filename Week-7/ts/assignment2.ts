import read from 'readline-sync'

let number1: number = +read.question("Enter two numbers : \n")
let number2: number = +read.question("")
let sum: number = number1 + number2
console.log(`The sum of the numbers is : ${sum}`);
