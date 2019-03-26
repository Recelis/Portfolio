
let n = 9;
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// use an array track number of socks

function sockMerchant(n, arr) {
    let gotOne = [];
    let sockPairs = 0;
    // look at pair
    for (let ii =0; ii < arr.length; ii++){
        // loop to check that socks are in gotOne
        console.log(gotOne);
        console.log(arr[ii]);
        let result = checkSock(gotOne, arr[ii]);
        console.log(result);
        if (result.num <= 0) gotOne.push(arr[ii]);  // if sock not in object => then add to object
        else{ // add to sockpairs and remove from gotOne array
            sockPairs++; 
            gotOne.splice(result.index,1);
        }
        
    }
    return sockPairs;

}

function checkSock(gotOne, sock){
    let obj = {num:0,index:0};
    gotOne.map((check,index)=>{
        if (check === sock) {
            obj.index = index;
            obj.num++;
        }
    });
    return obj;
}

console.log(sockMerchant(n,arr));
// 32.44