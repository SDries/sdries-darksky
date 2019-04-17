const cache = require('memory-cache');

const DarkskyCache = {
  getCachedResponse(longitude, latitude, time) {
    const key = this.getCacheKey(longitude, latitude, time);
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
      return Promise.resolve(cachedResponse);
    }
    return Promise.resolve(null);
  },

  /**
   * creates a caching key for a longitude, latitude and day
   * @param  {string} longitude
   * @param  {string} latitude
   * @param  {string} day       YYYY-MM-DD string
   * @return {string}           caching key
   */
  getCacheKey(longitude, latitude, day) {
    return `${longitude}-${latitude}-${day}`;
  },


  /**
   * caches response for one day
   * @param  {string} longitude
   * @param  {string} latitude
   * @param  {string} dayString
   * @param  {object} response  response to be cached
   * @return {object}           returns the response
   */
  cacheTimemachineResponse(longitude, latitude, dayString, response) {
    const day = 24 * 60 * 60 * 1000;
    const key = this.getCacheKey(longitude, latitude, dayString);
    return cache.put(key, response, day);
  },
};

module.exports = DarkskyCache;
