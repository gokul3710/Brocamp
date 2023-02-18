import read from 'readline-sync'

let mark: number = +read.question("Enter your mark : ")
if(mark>100 || mark <0){
    console.log('Invalid Entry');
}else if(mark<50){
    console.log('You have failed the exam');
}else{
    console.log("You have passed the exam");
}