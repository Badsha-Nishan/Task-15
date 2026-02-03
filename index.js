// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const lowest = [167, 190, 120, 165, 137];
let min = lowest[0];
for (const val of lowest) {
  if (val < min) {
    min = val;
  }
}

console.log(min);
