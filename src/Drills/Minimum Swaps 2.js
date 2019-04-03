let arr = [1,3,5,2,4,6,7];

function minimumSwaps(arr) {
  let swaps = 0;
  // read in map
  let newMap = new Map;
  arr.map((key,index) =>{
    newMap.set(key, index);
  });
  printMap(newMap);
  // look for minimum value not in position
  let count = 1;
  while(count < arr.length) {
    console.log(count);
    if (newMap.get(count) === count -1) count++;
    else {
      // let arr be spliced smaller to make search smaller
      let countIndex = newMap.get(count);
      console.log("index " + countIndex);
      console.log(Array.from(newMap.values()));
      console.log(Array.from(newMap.values()).indexOf(count-1));
      console.log(Array.from(newMap.keys()));

      let destIndex = Array.from(newMap.values()).indexOf(count-1);
      let destTempValue = Array.from(newMap.keys())[destIndex];
      console.log("destTempValue " + destTempValue);
      // console.log(Array.from(newMap.keys()));
      console.log("tempValue " + destTempValue);
      newMap.set(count,count-1);
      newMap.set(destTempValue, countIndex);
      swaps++;
      printMap(newMap);
    }
    
  }
  printMap(newMap);
  return swaps;
}

function printMap(newMap){
  newMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
  });
}
console.log(minimumSwaps(arr));
