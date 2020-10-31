const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let rep = options.repeatTimes || 1;
  let repAddition = options.additionRepeatTimes || 1;
  let strSep = options.separator || '+';
  let strSepAddition = options.additionSeparator || '|';
  let myStr = [];
  let myStrExt = (options.addition !== undefined) ? String(options.addition) : '';

  for (let i = 1; i <= repAddition; i++) myStr.push(myStrExt);
  myStrExt = String(myStr) + myStr.join(strSepAddition);

  myStr = [];
  for ( let i = 1; i <= rep; i++) myStr.push(myStrExt);

  return myStr.join(strSep)
};
  