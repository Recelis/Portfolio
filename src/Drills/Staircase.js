function staircase(n){
    for (let ii =1; ii <= n; ii++){ // for loop within for loop
        let stair = "";
        for (let jj =1; jj <= n; jj++){
            if (jj > n-ii) stair += "#"; // backwards counting
            else stair += " ";
        }
        console.log(stair);
    }
}

staircase(6);
// 8:22