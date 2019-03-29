let s = "aba";
n = 10;
function repeatedString(s,n){
    // calculate number of times needed to repeated string
    let repeatTimes = Math.floor(n/s.length);
    // find number of a's in string
    let matched = getAs(s);
    let flooredAs = matched*repeatTimes;
    // get a's in modString
    let modString = s.slice(0,n%s.length)
    // get a's in modString
    let modAs = getAs(modString);
    return modAs + flooredAs;
}

function getAs(myString){
    let matched = myString.match(/[a]/g);
    if (matched === null) matched = 0;
    else matched = matched.length;
    return matched;
}

console.log(repeatedString(s,n));
// 55:58