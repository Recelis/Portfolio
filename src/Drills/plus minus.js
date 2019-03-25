let arr = [1,1,0,-1,-1];

function plusMinus(arr){
    let numberOfPositive = 0;
    let numberOfNegative = 0;
    let numberOfZeros = 0;
    arr.map(val =>{ // iterating through array
        if (val > 0) numberOfPositive++;
        else if (val < 0) numberOfNegative ++;
        else numberOfZeros ++;
    });
    let posFrac = Math.floor(numberOfPositive/arr.length *1000000)/1000000;
    let negFrac = Math.floor(numberOfNegative/arr.length*1000000)/1000000;
    let zeroFrac = Math.floor(numberOfZeros/arr.length*1000000)/1000000; // removing decimal spaces
    console.log(posFrac);
    console.log(negFrac);
    console.log(zeroFrac);
    return [posFrac, negFrac, zeroFrac];
}
plusMinus(arr);
//8:46