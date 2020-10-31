const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let num = 2**disksNumber - 1;
  let time =  Math.floor(num/(turnsSpeed/3600));
  let result = {
    turns: 0,
    seconds: 0,
  }
  result.turns = num;
  result.seconds = time;
  return result
};
