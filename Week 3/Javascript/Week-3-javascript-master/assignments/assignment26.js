var readlineSync = require("readline-sync");

let str = readlineSync.question("Enter a string : ");

try {
  strRev = str.split("").reverse().join("");
  let type = typeof str;
  console.log(`Reversed string is : ${strRev}`);
} catch (error) {
  console.log(error.message);
}
finally{
  console.log("Type of", str, "is :", typeof str);
}
