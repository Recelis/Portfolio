let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar){
    let output = ar.reduce((prev, curr) => {
        return curr += prev;
    });
    console.log(output);
    return output;
}

// finished in 2:35

aVeryBigSum(arr);