import read from 'readline-sync';

class Array {

    main() {
        let [limit, array1, array2] = this.getArray();
        let sumArray: number[][] = this.addArray(limit as number, array1 as number[][], array2 as number[][]);
        this.displayArray(limit as number, sumArray as number[][]);
    }

    getArray() {
        let limit: number = +read.question("Enter the limit of array : ");
        console.log("Enter the values of Array 1");

        let array1: number[][] = [];
        for (let i: number = 0; i < limit; i++) {
            let values: number[] = [];
            for (let j: number = 0; j < limit; j++) {
                values[j] = +read.question("");
            }
            array1.push(values)
        }

        console.log("Enter the values of Array 2");

        let array2: number[][] = [];
        for (let i: number = 0; i < limit; i++) {
            let values: number[] = [];
            for (let j: number = 0; j < limit; j++) {
                values[j] = +read.question("");
            }
            array2.push(values)
        }

        return [limit, array1, array2];
    }

    addArray(limit: number, array1: number[][], array2: number[][]) {
        let array: number[][] = [];
        for (let i: number = 0; i < limit; i++) {
            let values: number[] = [];
            for (let j: number = 0; j < limit; j++) {
                values[j] = array1[i][j] + array2[i][j];
            }
            array.push(values);
        }

        return array;
    }

    displayArray(limit: number, array: number[][]) {
        console.log("Sum of two arrays are : ");

        for (let i: number = 0; i < limit; i++) {
            console.log(...array[i]);
        }
    }

}

let arr = new Array()
arr.main()

