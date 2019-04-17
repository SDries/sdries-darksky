const Helpers = {
  /**
   * returns two digits (added a leading zero if needed)
   * @param  {number} number
   * @return {number}
   */
  formatNumberWithLeadingZero: number => (`0${number}`).slice(-2),

  /**
   * returns date formatted as YYYY-MM-DD
   * @param  {object} date date object
   * @return {string}      formatted string
   */
  getDayString: date => `${date.getFullYear()}-${Helpers.formatNumberWithLeadingZero(date.getMonth() + 1)}-${Helpers.formatNumberWithLeadingZero(date.getDate())}`,

  /**
   * returns array with date objects
   * @return {array} array of dates
   */
  getPast30Days: () => {
    const date = new Date();
    const days = [];

    for (let i = 1; i < 31; i += 1) {
      date.setDate(date.getDate() - 1);
      days.push(new Date(date));
    }
    return days;
  },
};

module.exports = Helpers;
