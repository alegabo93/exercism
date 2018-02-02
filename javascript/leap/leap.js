const Year = function (input) {
  this.value = input;
};

Year.prototype.isLeap = function () {
  const year = this.value;
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0);
};

module.exports = Year;
