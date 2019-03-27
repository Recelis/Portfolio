let s = "DDUUUUDD";
let n = s.length;
// find the number of valleys

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let numValleys = 0;
    let newValley = false;
    let level = 0; // idea of a tracker for level
    for (let ii =0; ii < s.length; ii++){
        if (s[ii] === "U") {
            if (level === -1) numValleys++;
            level ++;
        }
        if (s[ii]==="D") level --;
    }
    return numValleys;

}

console.log(countingValleys(n,s));
//16:47 misunderstood the question
