/*************** This code rotates a matrix by 90 degrees and outputs it ***************/
//NB: Run code in the console to see the result


console.log("Enter no of rows");
var row = parseInt(prompt("Enter rows", "0"), 10);

console.log("Enter no of cols");
var col = parseInt(prompt("Enter columns", "0"), 10);

//variable declaration
var matrix = [];
var input;
var arr_Text;
console.log("Enter Elements of Matrix");

//Create the matrix
for (var i = 0; i < row; i++) {
    matrix[i] = [];
    for (var j = 0; j < col; j++) {
        input = parseInt(prompt("Enter Elements Of Matrix", "0"), 10);
        matrix[i][j] = input;
    }
}
//Display matrix
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        arr_Text += matrix[i][j] + " ";
    }
    arr_Text = "";
}

for (var i = 0; i < col / 2; i++) {
    for (var j = i; j < row - i - 1; j++) {
        // Swap elements after each iteration in Clockwise direction
        var temp = matrix[i][j];
        matrix[i][j] = matrix[row - 1 - j][i];
        matrix[row - 1 - j][i] = matrix[row - 1 - i][row - 1 - j];
        matrix[row - 1 - i][row - 1 - j] = matrix[j][row - 1 - i];
        matrix[j][row - 1 - i] = temp;
    }
}
//Display matrix after rotation
console.log("Matrix after rotation");
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++)
        arr_Text += matrix[i][j] + " ";
    console.log(arr_Text);
    arr_Text = "";
}
