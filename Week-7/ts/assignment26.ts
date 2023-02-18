import read from 'readline-sync';

let str: String | Number = read.question("Enter a string : ");

try {
  let strRev: String = str.split("").reverse().join("");
  console.log(`Reversed string is : ${strRev}`);
} catch (error: any) {
  console.log(error.message);
}
finally{
  console.log("Type of", str, "is :", typeof str);
}