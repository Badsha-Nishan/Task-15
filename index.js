// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// const lowest = [167, 190, 120, 165, 137];
// let min = lowest[0];
// for (const val of lowest) {
//   if (val < min) {
//     min = val;
//   }
// }

// console.log(min);

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

// let smallFriend = friends[0];
// for (const friend of friends) {
//   if (friend.length < smallFriend.length) {
//     smallFriend = friend;
//   }
// }
// console.log(smallFriend);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalLaptopPrice = laptopPrice * laptopQty;
  const totalTabletPrice = tabletPrice * tabletQty;
  const totalMobilePrice = mobilePrice * mobileQty;
  const totalCost = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  return totalCost;
}

const laptop = 1;
const tablet = 1;
const mobile = 1;
const budget = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(budget);
