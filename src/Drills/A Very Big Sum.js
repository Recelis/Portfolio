let array = [
    1000000001, 1000000002, 1000000003, 1000000004,1000000005
]
// reduce function
function aVeryBigSum(ar) {
    console.log(ar);
    return ar.reduce((prev, curr) => {
        return curr + prev;
    })
}

let total = aVeryBigSum(array);
console.log(total);

// finished in 9:25