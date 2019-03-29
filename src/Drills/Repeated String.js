let s = "aba";
n = 10000000000000;
function repeatedString(s,n){
    let repeated = [];
    // calculate number of times needed to repeated string
    let repeatTimes = Math.ceil(n/s.length+1);
    console.log(repeatTimes);
    for(let ii =0; ii < repeatTimes; ii++){
        repeated += s;
    }
    

    // only use n characters

    repeated= repeated.slice(0, n);
    console.log(repeated);
    // locate number of a's using regex
    let As = repeated.match(/[a]/g);
    console.log(As);
    return As.length;
}

console.log(repeatedString(s,n));