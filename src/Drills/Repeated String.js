let s = "aba";
n = 10;
function repeatedString(s,n){
    // calculate number of times needed to repeated string
    let repeatTimes = Math.floor(n/s.length);
    console.log(repeatTimes);
    // find number of a's in string
    let ass = s.match(/[a]/g);
    if (ass === null) ass = 0;
    else{
        ass = ass.length;
    } 
    let flooredAs = ass*repeatTimes;
    console.log(flooredAs);
    console.log(n%s.length);
    // get a's in modString
    let modString = s.slice(0,n%s.length)
    console.log(modString);
    // get a's in modString
    let newAss = modString.match(/[a]/g);
    if (newAss === null) newAss = 0;
    else newAss = newAss.length;
    return newAss + flooredAs;
    
}

console.log(repeatedString(s,n));
// 55:58