// Define the number of rows and columns in the pattern
const numRows = 5;
const numCols = 5;

// Use a nested for loop to iterate over the rows and columns
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        // If the current row and column index are equal, print a star
        if (row === col) {
            console.log(`*`);
        } else {
            console.log(` `);
        }
    }
}