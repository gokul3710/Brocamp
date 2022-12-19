"use strict"

var readlineSync = require("readline-sync");


class Area{

    circle(radius){
        return 3.14*radius*radius;
    }

    square(side){
        return side*side;
    }

    rectangle(length,breadth){
        return length*breadth;
    }

    triangle(height,base){
        return height*base/2;
    }
 
}

class MyClass extends Area{

    constructor(){
        super();
        let choice = +readlineSync.question(`Area Calculator
Enter 1 for Circle
2 for square
3 for rectangle
4 for triangle
`);

        switch (choice) {
            case 1:
                this.circle()
                break;
            case 2:
                this.square()
                break;
            case 3:
                this.rectangle()
                break;       
            case 4:
                this.triangle()
                break;
            default:
                console.log("Invalid Entry");
                break;
        }
    }

    circle(){
        let radius = +readlineSync.question("Enter the radius of the circle : ")
        let area = super.circle(radius)
        console.log(`Area of the circle is : ${area}`);
    }

    square(){
        let side = +readlineSync.question("Enter the length of a side of the square : ")
        let area = super.square(side)
        console.log(`Area of the square is : ${area}`);
    }

    rectangle(){
        let length = +readlineSync.question("Enter the length of the rectangle : ")
        let breadth = +readlineSync.question("Enter the breadth of the rectangle : ")
        let area = super.rectangle(length,breadth)
        console.log(`Area of the rectangle is : ${area}`);
    }

    triangle(){
        let height = +readlineSync.question("Enter the height of the triangle : ")
        let base = +readlineSync.question("Enter the base of the triangle : ")
        let area = super.triangle(height,base)
        console.log(`Area of the triangle is : ${area}`);
    }
}

new MyClass();