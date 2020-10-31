const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)){
      let base = 1;
      let nestedArrays = 0;
      let max = 0;

      arr.forEach((item) => {
        nestedArrays += this.calculateDepth(item);
        if (nestedArrays > max) max = nestedArrays;
      })

      return base + max;
    }
    }
};