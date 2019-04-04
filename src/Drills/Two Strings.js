let s1 = "ho";
let s2 = "world";

function twoStrings(s1, s2){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphaSplit = alphabet.split("");
    // see what letters are checked
    let s1Split = s1.split("");
    let s1Map = {};
    for (let ii =0; ii < s1Split.length; ii++){
        let s1Letter = s1Split[ii];
        s1Map[s1Letter] = false;
        // if all letters of alphabet are checked, then break
        alphaSplit.splice(alphaSplit.indexOf(s1Letter),1);
        if (alphaSplit.length == 0) break;
    }
    let s2Split = s2.split("");
    for (let ii =0; ii < s2Split.length; ii++){
        let s2Letter = s2Split[ii];
        if (s1Map[s2Letter] === false) return "YES";
    }
    return "NO";
}

console.log(twoStrings(s1, s2));
// 80.52