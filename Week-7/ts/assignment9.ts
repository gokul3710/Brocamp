import read from 'readline-sync'


let limit : number = +read.question('Enter a limit : ')
let str : string = ''

for (let i: number = 1; i <= limit; i++) {
    for (let j : number = 1; j <= i; j++) {
        str+=j;
    }
    str+='\n';
}

console.log(str.trim());
