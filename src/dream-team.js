const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  if(members != null) {
    return members.sort().map(element => {
      if (typeof element === 'string') {
        return element.trim().toUpperCase()[0];
      }
      return '';
    }).sort().join('')
  }
};
