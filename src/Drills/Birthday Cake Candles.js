let arr = [3, 2, 1, 3];

function birthdayCakeCandles(ar) {
    let age = ar.length;
    let candles = 0;
    // get max height candle
    let maxVal = Math.max(...ar); // spread operator to break apart an arr and use of max
    for (let ii =0; ii < age; ii ++){
        if (ar[ii] === maxVal) candles++; 
    }
    return candles;
}

console.log(birthdayCakeCandles(arr));
// 6:41