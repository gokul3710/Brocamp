import read from 'readline-sync'


let mark:number = +read.question("Enter Your Mark : ")
if(mark>100 && mark < 0){
    console.log("Invalid Entry");
}else if(mark >= 90 && mark <= 100){
    console.log("You have got A grade");
}else if(mark >= 80 && mark < 90){
    console.log("You have got B grade");
}else if(mark >= 70 && mark < 80){
    console.log("You have got C grade");
}else if(mark >= 60 && mark < 70){
    console.log("You have got D grade");
}else if(mark >= 50 && mark < 60){
    console.log("You have got E grade");
}else {
    console.log('You have failed the exam');  
}
