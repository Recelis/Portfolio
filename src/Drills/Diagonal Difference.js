let arr = [[11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]];

function DiagonalDifference(ar){
    let leftToRight = 0;
    for (let ii =0; ii < ar.length; ii ++){
        leftToRight += ar[ii][ii]; 
    }
    console.log(leftToRight);
    let rightToLeft = 0;
    for (let ii = 0; ii < ar.length; ii ++){ // for loop counting
        rightToLeft += ar[ii][ar.length - ii -1]; // back to front counting
    }
    console.log(rightToLeft);
    return Math.abs(leftToRight - rightToLeft);
}

let total = DiagonalDifference(arr);
console.log(total);
// 5:18 