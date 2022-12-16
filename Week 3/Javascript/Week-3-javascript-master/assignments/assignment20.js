const rows = 5;
const columns = 5;
let str ='';
let count = 1;

for(let i=1;i<=rows;i++){
    for(let j=1;j<=i;j++){
        str += `${count} `;
        count++;
    }
    str += "\n"
}

console.log(str.trim());