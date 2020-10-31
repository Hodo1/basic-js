const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  if (sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }
  let time = (MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  console.log(Math.ceil(time))
};
