
let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
    if (a.length !== b.length) return "size are not the same!";
    let outputA = 0;
    let outputB = 0;
    for (let ii = 0; ii< a.length; ii ++){ // for loop
        if (a[ii] > b[ii]) outputA ++; // if elseif else
        else if (a[ii] == b[ii]) continue;
        else outputB ++;
    }
    return [outputA, outputB];
}

let total = compareTriplets(a,b);
console.log(total);

// 5:49