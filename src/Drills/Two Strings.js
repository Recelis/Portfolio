let s1 = "hello";
let s2 = "world";

function twoStrings(s1, s2){
    let s1Split = s1.split("");
    let s2Split = s2.split("");
    console.log(s1Split);
    for (let ii =0; ii < s1Split.length; ii++){
        if (s1Split.indexOf(s2Split[ii]) !== -1) return "YES";
    }
    return "NO";
}

console.log(twoStrings(s1, s2))