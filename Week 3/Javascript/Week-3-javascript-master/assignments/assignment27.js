var readlineSync = require("readline-sync");

let height = +readlineSync.question("Enter your height : ")
try {
    if(isNaN(height)){
        throw new Error("notANumberError")
    }
    else if(height>200){
        throw new Error("HugeHeightError")
    }
    else if(height<40){
        throw new Error("TinyHeightError")
    }
} catch (error) {
    console.log(error.message);
}