let arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, 0-3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

function hourglassSum(arr) {
  let sum = Number.NEGATIVE_INFINITY; // negative infinity
  // loop through vertical hourglasses second
  for (let jj = 0; jj <= arr.length - 3; jj++) {
    // loop through arr to get horizontal hourglasses
    for (let ii = 0; ii <= arr[jj].length - 3; ii++) {
      // print hourglasses
      console.log(arr[jj][ii] + " " + arr[jj][ii + 1] + " " + arr[jj][ii + 2]);
      console.log("  " + arr[jj+1][ii + 1] + "  ");
      console.log(
        arr[jj+2][ii] + " " + arr[jj+2][ii + 1] + " " + arr[jj+2][ii + 2]
      );
      
      let hourSum =
        arr[jj][ii] +
        arr[jj][ii + 1] +
        arr[jj][ii + 2] +
        arr[jj + 1][ii + 1] +
        arr[jj + 2][ii] +
        arr[jj + 2][ii + 1] +
        arr[jj + 2][ii + 2];
        console.log(hourSum + "\n");
      sum = Math.max(sum, hourSum); // max method from Math
    }
  }
  return sum;
}

console.log(hourglassSum(arr));
// 35.34
