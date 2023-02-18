import read from 'readline-sync'

let day : number = +read.question(`Enter 1 for Sunday 
2 for Monday,
3 for Tuesday,
4 for Wednesday,
5 for Thursday,
6 for Friday,
7 for Saturday\n`)

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Entry");
        break;
}

