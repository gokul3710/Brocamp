var readlineSync = require('readline-sync');

var string,isPalindrome;

string = readlineSync.question("Enter a word : ");

for(let i=0;i<string.length;i++){
    if(string[i]!=string[string.length-i-1]){
        console.log("The entered word is not a palindrome");
        isPalindrome=false;
        break;
    }else{
        isPalindrome =true
    }
}

if(isPalindrome){
    console.log(`The entered word is a palindrome`);
}
