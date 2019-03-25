let arr = [1,3,5,7,9];

function miniMaxSum(arr) {
    // sort arr so that smallest numbers at one end
    let sorted = arr.sort(); // need to learn some sorting algorithms, dunno how Array.sort() works exactly. Helps make minimum and maximum easier.
    // total sum

    let total = arr.reduce((prev, curr)=>{ // sum total of array
        return prev + curr;
    });
    // calculate four smallest numbers
    let smallest = total - arr[arr.length-1];
    // calculate four largest numbers sum
    let largest = total - arr[0];
    console.log(smallest + " " + largest);
    return [smallest, largest];
}

miniMaxSum(arr);
//6:42