var readlineSync=require('readline-sync')
let choice=Number(readlineSync.question('enter a number:'))
switch (choice) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tueday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('Invalid Entry');
        break;
}