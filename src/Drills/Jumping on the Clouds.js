let c = [0,0,1,0,0,0,0];


function jumpingOnClouds(c) {
    let steps =0;
    let index = 0;
    while(index <= c.length){
        // scans two ahead
        console.log(index);
        if (index + 2 < c.length){
            steps++;
            // check that columbus or thundercloud
            if (checkSafe(c[index+2])) {
                index +=2;
            }
            else index+=1;
            
        } else if (index+1 < c.length) {
            steps++;
            index+=1;
        } else break;
    } 
    return steps;

}

function checkSafe(cloud){
    if (cloud === 0) return true;
    else return false;
}

console.log(jumpingOnClouds(c));
// 30:53