// https://darksky.net/dev/docs#response-alerts
export const alert = {
  description: 'A detailed description of the alert.',
  expires: 0,
  regions: ['region 1'],
  severity: "advisory",
  time: 0,
  title: 'A brief description of the alert.',
  url: 'https://www.google.com/',
};

export const point = {"time":1550764770,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":9.57,"apparentTemperature":6.76,"dewPoint":6.79,"humidity":0.83,"pressure":1027.76,"windSpeed":20.95,"windGust":27.71,"windBearing":282,"cloudCover":0.4,"uvIndex":0,"visibility":8.08,"ozone":306.86};

// block with 2 days of data
export const block = {"summary":"No precipitation throughout the week, with high temperatures rising to 17°C on Wednesday.","icon":"clear-day","data":[{"time":1550703600,"summary":"Partly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1550731823,"sunsetTime":1550769241,"moonPhase":0.57,"precipIntensity":0,"precipIntensityMax":0.0025,"precipIntensityMaxTime":1550757600,"precipProbability":0,"temperatureHigh":11.43,"temperatureHighTime":1550754000,"temperatureLow":5.1,"temperatureLowTime":1550815200,"apparentTemperatureHigh":11.43,"apparentTemperatureHighTime":1550754000,"apparentTemperatureLow":4.58,"apparentTemperatureLowTime":1550808000,"dewPoint":4.65,"humidity":0.86,"pressure":1026.81,"windSpeed":11.64,"windGust":32.17,"windGustTime":1550739600,"windBearing":244,"cloudCover":0.45,"uvIndex":2,"uvIndexTime":1550750400,"visibility":8.77,"ozone":314.75,"temperatureMin":2.68,"temperatureMinTime":1550725200,"temperatureMax":11.43,"temperatureMaxTime":1550754000,"apparentTemperatureMin":0.12,"apparentTemperatureMinTime":1550725200,"apparentTemperatureMax":11.43,"apparentTemperatureMaxTime":1550754000},{"time":1550790000,"summary":"Partly cloudy starting in the afternoon, continuing until evening.","icon":"partly-cloudy-day","sunriseTime":1550818102,"sunsetTime":1550855748,"moonPhase":0.61,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureHigh":13.84,"temperatureHighTime":1550847600,"temperatureLow":4.93,"temperatureLowTime":1550901600,"apparentTemperatureHigh":13.84,"apparentTemperatureHighTime":1550847600,"apparentTemperatureLow":2.07,"apparentTemperatureLowTime":1550901600,"dewPoint":6.98,"humidity":0.88,"pressure":1034.53,"windSpeed":3.3,"windGust":32.19,"windGustTime":1550872800,"windBearing":122,"cloudCover":0.22,"uvIndex":2,"uvIndexTime":1550833200,"visibility":16.09,"ozone":282.43,"temperatureMin":5.1,"temperatureMinTime":1550815200,"temperatureMax":13.84,"temperatureMaxTime":1550847600,"apparentTemperatureMin":4.58,"apparentTemperatureMinTime":1550808000,"apparentTemperatureMax":13.84,"apparentTemperatureMaxTime":1550847600}]};
