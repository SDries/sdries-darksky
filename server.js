const express = require('express');
const async = require('async');
const { param, validationResult } = require('express-validator/check');
const path = require('path');
const { formatErrorJson, apiErrorJson } = require('./helpers/errors.js');
const { getPast30Days, getDayString } = require('./helpers/index.js');
const DarkSkyCache = require('./helpers/darksky-cache.js');
// this is a free key
// put paid key in a environment variable on the server (production, staging...)
const darkSkyAPIKey = process.env.DARKSKYAPIKEY || 'e0c0b05a810e9d167583c0334a6e765e';

const DarkSkyRequester = require('./helpers/darksky-requester.js');

const darkSkyRequester = new DarkSkyRequester(darkSkyAPIKey);

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
}

/**
 * Currently a placeholder for a bigger error handeling function
 */
const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
  // TODO: write the error message in a log file
  // TODO: use file rotation to prevent bloated log files on the server
};

app.get('/api/forecast/:longitude/:latitude', [
  param('longitude').isDecimal(),
  param('latitude').isDecimal(),
], (req, res) => {
  try {
    validationResult(req).throw();
    const { longitude, latitude } = req.params;

    darkSkyRequester.makeRequest(longitude, latitude)
      .then(response => DarkSkyRequester.filterApiResponse(response))
      // no need to cache current/future data because it might change
      .then(response => res.send(response))
      .catch((error) => {
        handleError(error);
        res.status(400).send(apiErrorJson);
      });
  } catch (error) {
    handleError(error);
    res.status(422).json(formatErrorJson);
  }
});

const getRequestForDate = (longitude, latitude, date) => (callback) => {
  const dayString = getDayString(date);

  DarkSkyCache.getCachedResponse(longitude, latitude, dayString)
    .then((cachedResponse) => {
      if (!cachedResponse) throw new Error('no cachedResponse');
      callback(null, cachedResponse);
    }).catch(() => {
      darkSkyRequester.makeRequest(longitude, latitude, dayString)
        .then(response => DarkSkyRequester.filterApiResponse(response).daily.data[0])
        .then(response => DarkSkyCache.cacheTimemachineResponse(longitude, latitude, dayString, response))
        .then(response => callback(null, response))
        .catch(error => callback(error));
    });
};

app.get('/api/timemachine/:longitude/:latitude', [
  param('longitude').isDecimal(),
  param('latitude').isDecimal(),
],
(req, res) => {
  try {
    validationResult(req).throw();

    const { longitude, latitude } = req.params;
    const past30Days = getPast30Days();
    const darkSkyRequests = past30Days.map(date => getRequestForDate(longitude, latitude, date));

    async.parallel(darkSkyRequests, (error, results) => {
      if (error) {
        handleError(error);
        res.status(400).send(apiErrorJson);
        return;
      }
      const result = { daily: { data: results } };
      res.send(result);
    });
  } catch (error) {
    handleError(error);
    res.status(422).json(formatErrorJson);
  }
});

if (process.env.NODE_ENV === 'production') {
  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Backend listening on port ${port}`));
