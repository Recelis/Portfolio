let arr = [1,2,3];

function SimpleArraySum(arr){
    return arr.reduce((prev, curr) =>{
        return curr += prev;
    });
}

let result = SimpleArraySum(arr);
console.log(result);

//2:12s
