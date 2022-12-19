var readlineSync = require('readline-sync');

let mark = readlineSync.question("Enter your mark : ");
markInt = parseInt(mark);

if(markInt>100 || markInt <0 ){
    console.log("Invalid Mark\nMark should be between 0 and 100");
}else if(markInt>=50){
    console.log("Congratulations.. You have passed the exam.");
}else{
    console.log("You haved falied the exam");
}