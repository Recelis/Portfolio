let a = [1,2,3,4,5];
let d = 2;

function rotLeft(a,d){
    return a.slice(d).concat(a.slice(0,d));
}

console.log(rotLeft(a,d));
//4:40