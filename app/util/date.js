const moment = require('moment');

class DateFilter {
  constructor(arr) {
    this.arr = arr; // array of objects
  }

  between(from, to, key = 'date') {
    let x = this.arr;
    if (from) {
      x = this.arr.filter((it) => {
        return moment(it[key]).isBetween(from, to || moment(from).add(1, 'day'));
      });
    }
    return x;
  }
}

module.exports = DateFilter;
