let revenue = [1,2,3,1,6,10]; // revenues for each billboard
let k = 2; // k consecutive values



function billboards(k, revenue){
    recursiveProb(profit,0,revenue);

}

function recursiveProb(profit,index,queue){
    if (queue.length === 0) return 0;
    else {
        for (let ii =index; ii < queue.length; ii++){
            // remove revenue item
        let item = queue.splice(ii,1);
        console.log(queue);
        console.log(shifted);
        // checkForGreaterThanKConsec
        // if true return profit + billbords(k,revenue);

        // else return profit item + billboards(k,revenue);
        }
        
    }

}

function checkForGreaterThanKConsec(arr){

}

console.log(billboards(k, revenue));