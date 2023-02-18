import read from 'readline-sync';

const rows = +read.question("Enter a limit : ");
let str: string = '';
let count: number = 1;

for (let i: number = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        str += `${count} `;
        count++;
    }
    str += "\n"
}

console.log(str.trim()); 