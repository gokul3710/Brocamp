let limit = 5;
let pattern = "";

for(let i=1;i<=limit;i++){
    for(let j=1;j<=i;j++){
        pattern += j
    }
    pattern += "\n"
}

console.log(pattern);