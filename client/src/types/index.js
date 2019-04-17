import propTypes from 'prop-types';

// https://darksky.net/dev/docs#response-alerts
export const alertType = propTypes.shape({
  description: propTypes.string.isRequired,
  expires: propTypes.number.isRequired,
  regions: propTypes.arrayOf(propTypes.string).isRequired,
  severity: propTypes.oneOf(['advisory', 'watch', 'warning']).isRequired,
  time: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
});

// https://darksky.net/dev/docs#data-point-object
export const pointType = propTypes.shape({
  apparentTemperature: propTypes.number,
  apparentTemperatureHigh: propTypes.number,
  apparentTemperatureHighTime: propTypes.number,
  apparentTemperatureLow: propTypes.number,
  apparentTemperatureLowTime: propTypes.number,
  apparentTemperatureMax: propTypes.number,
  apparentTemperatureMaxTime: propTypes.number,
  apparentTemperatureMin: propTypes.number,
  apparentTemperatureMinTime: propTypes.number,
  cloudCover: propTypes.number,
  dewPoint: propTypes.number,
  humidity: propTypes.number,
  icon: propTypes.string,
  moonPhase: propTypes.number,
  nearestStormBearing: propTypes.number,
  nearestStormDistance: propTypes.number,
  ozone: propTypes.number,
  precipAccumulation: propTypes.number,
  precipIntensity: propTypes.number,
  precipIntensityError: propTypes.number,
  precipIntensityMax: propTypes.number,
  precipIntensityMaxTime: propTypes.number,
  precipProbability: propTypes.number,
  precipType: propTypes.oneOf(['rain', 'snow', 'sleet']),
  pressure: propTypes.number,
  summary: propTypes.string,
  sunriseTime: propTypes.number,
  sunsetTime: propTypes.number,
  temperature: propTypes.number,
  temperatureHigh: propTypes.number,
  temperatureHighTime: propTypes.number,
  temperatureLow: propTypes.number,
  temperatureLowTime: propTypes.number,
  temperatureMax: propTypes.number,
  temperatureMaxTime: propTypes.number,
  temperatureMin: propTypes.number,
  temperatureMinTime: propTypes.number,
  time: propTypes.number.isRequired,
  uvIndex: propTypes.number,
  uvIndexTime: propTypes.number,
  visibility: propTypes.number,
  windBearing: propTypes.number,
  windGust: propTypes.number,
  windGustTime: propTypes.number,
  windSpeed: propTypes.number,
});

// https://darksky.net/dev/docs#data-block-object
export const blockType = {
  data: propTypes.arrayOf(pointType).isRequired,
  summary: propTypes.string,
  icon: propTypes.string,
};
