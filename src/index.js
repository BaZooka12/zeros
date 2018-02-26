module.exports = function getZerosCount(number) {
  let countZeroes = 0;
  let counter = 1;
  while (true) {
    let zeroes = Math.floor(number / Math.pow(5, counter));
    if (zeroes < 1) {
      break;
    }
    countZeroes += zeroes;
    counter++;
  }
  return countZeroes;
}
