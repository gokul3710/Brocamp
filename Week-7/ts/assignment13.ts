import read from 'readline-sync';

let char : string = read.question('Enter a word : ')

function isPalindrome(char: string){for (let i : number = 0; i  < char.length/2; i++) {
    if(char[i] != char[char.length-i-1]){
        return false
    }    
    return true
}}

isPalindrome(char)?console.log(`The word is Palindrome`):console.log(`The word is not a Palindrome`)
