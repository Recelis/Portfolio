let arr = [1,3,5,2,4,6,7];

function minimumSwaps(arr) {
  let swaps = 0;
  // read in map
  let newMap = new Map;
  arr.map((key,index) =>{
    newMap.set(key, index);
  });
  newMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
  });
  // look for minimum value not in position
  let count = 1;
  while(count < arr.length) {
    console.log(count);
    if (newMap.get(count) === count -1) count++;
    else {
      // let arr be spliced smaller to make search smaller
      let index = newMap.get(count);
      
      let tempValue = Array.from(newMap.keys())[count-1];
      
      newMap.set(count,count-1);
      newMap.set(tempValue, index);
      swaps++;
    }
    newMap.forEach(function(value, key) {
      console.log(key + ' = ' + value);
    });
  }
  
  return swaps;
}

console.log(minimumSwaps(arr));
