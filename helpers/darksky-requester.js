const DarkSky = require('dark-sky');

module.exports = class DarkSkyRequester extends DarkSky {
  constructor(...args) {
    super(...args);

    this.darkSkyUnits = 'ca';
    this.darkSkyLanguage = 'en';
  }

  makeRequest(longitude, latitude, time = false) {
    const request = this.coordinates({ lat: latitude, lng: longitude });
    if (time) {
      request.time(time).exclude('minutely,hourly,currently,flags');
    } else {
      request.time(null).exclude('minutely,hourly');
    }
    return request
      .language(this.darkSkyLanguage)
      .units(this.darkSkyUnits)
      .get();
  }

  /**
   * API should return smaller, easier to handle, object
   * @param  {object} response Dark sky api response
   * @return {object}          Dark sky api response sub set
   */
  static filterApiResponse(response) {
    const allowedFields = ['currently', 'daily', 'alerts', 'flags'];

    return Object.keys(response)
      .filter(key => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = response[key]; // eslint-disable-line no-param-reassign
        return obj;
      }, {});
  }
};
