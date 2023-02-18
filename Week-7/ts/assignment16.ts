import read from 'readline-sync';

let num: number = +read.question('Enter the number : ')

function isPrime(num: number) {
    let flag = true
    for (let i: number = 2; i < Math.pow(num, 0.5); i++) {
        if(num%i === 0){
            flag = false
            return flag
        }
    }
    return flag
}

isPrime(num)? console.log(`The number is a prime`): console.log(`The number is not a prime`);


