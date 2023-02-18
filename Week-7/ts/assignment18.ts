import read from 'readline-sync';

let test : number = +read.question("Enter your written test mark : ")
let lab : number = +read.question("Enter your lab mark : ")
let assignment :number = +read.question("Enter your assignment mark :")

let grade: number =  (test*70)/100 + (lab*20)/100 + (assignment*10)/100;

console.log(`You overall grade is : ${grade}`);