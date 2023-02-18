import read from 'readline-sync';

class Area {

    circle(radius: number): number {
        return 3.14 * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, breadth: number): number {
        return length * breadth;
    }

    triangle(height: number, base: number): number {
        return height * base / 2;
    }

}

class MyClass extends Area {

    constructor() {
        super();
        let choice : number = +read.question(`Area Calculator
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

    circle() : number{
        let radius = +read.question("Enter the radius of the circle : ")
        let area = super.circle(radius)
        console.log(`Area of the circle is : ${area}`);
        return 0
    }

    square(): number {
        let side = +read.question("Enter the length of a side of the square : ")
        let area = super.square(side)
        console.log(`Area of the square is : ${area}`);
        return 0
    }

    rectangle(): number {
        let length = +read.question("Enter the length of the rectangle : ")
        let breadth = +read.question("Enter the breadth of the rectangle : ")
        let area = super.rectangle(length, breadth)
        console.log(`Area of the rectangle is : ${area}`);
        return 0
    }

    triangle(): number {
        let height = +read.question("Enter the height of the triangle : ")
        let base = +read.question("Enter the base of the triangle : ")
        let area = super.triangle(height, base)
        console.log(`Area of the triangle is : ${area}`);
        return 0
    }
}

new MyClass();