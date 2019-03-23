'use strict';
let input = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

function diagonalDifference(arr) {
    console.log(arr);
    let sumLeftToRight = 0;
    let sumRightToLeft = 0;
    for (let ii = 0; ii < arr.length; ii++){
        sumLeftToRight += arr[ii][ii];
    }
    for (let ii = 0; ii < arr.length; ii++){ // for loop counting
        sumRightToLeft += arr[ii][arr.length -1 -ii];// back to front counting
    }
    return Math.abs(sumLeftToRight - sumRightToLeft);
}

let output = diagonalDifference(input);
console.log(output);
// 11:30 