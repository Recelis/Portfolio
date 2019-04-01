let arr = [7, 1, 3, 2, 4, 5, 6];

function minimumSwaps(arr) {
    let swaps = 0;
    // look for minimum value not in position
    for (let jj = 0; jj < arr.length; jj++) {
        for (let ii = 0; ii < arr.length; ii++) {
            console.log(arr);
            if (arr[ii] === ii + 1) break;
            else {
                let tempValue = arr[ii];
                let index = arr.indexOf(ii + 1);
                arr[ii] = arr[index];
                arr[index] = tempValue;
                swaps++;
                
                break;
            }
        }
    }
    console.log(arr);
    return swaps;
}

console.log(minimumSwaps(arr));