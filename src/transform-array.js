const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
  let arrTrans = [];
  let i;
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        arrTrans.push(arr[i + 1])
      }
    }
    else if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') continue;
      else if (arr[i - 1] !== undefined ) {
        arrTrans.push(arr[i - 1]);
      }
    }
    else if (arr[i] === '--discard-next') {
      if (arr[i + 1] !== undefined) {
        i = i + 1;
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') continue;
      else if (arr[i - 1] !== undefined ) {
        arrTrans.pop();
      }
    }
    else  arrTrans.push(arr[i])
  }
  return arrTrans;
};
