function staircase(n){
    for (let ii =1; ii <= n; ii++){
        let stair = "";
        for (let jj =1; jj <= n; jj++){
            if (jj > n-ii) stair += "#";
            else stair += " ";
        }
        console.log(stair);
    }
}

staircase(6);
// 8:22