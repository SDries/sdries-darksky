import React, { Component } from 'react';
import propTypes from 'prop-types';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { pointType } from '../../types';
import { formatUnixDate, formatTemperature, temperatureUnits } from '../../helpers';

import './darkskypoint.scss';

// todo: add onClick - show more information feature
class DarkSkyPoint extends Component {

  minMaxTemp(maxTemperature, minTemperature) {
    if (!maxTemperature && !minTemperature) return;

    let temperatureHigh, temperatureLow;
    if(maxTemperature){
      temperatureHigh = <div className="high">{formatTemperature(maxTemperature)}{temperatureUnits}</div>;
    }
    if(minTemperature) {
      temperatureLow = <div className="low">{formatTemperature(minTemperature)}{temperatureUnits}</div>;
    }

    return (<div className="min-max-temp">
      {temperatureHigh}
      {temperatureLow}
      </div>);
  }

  currentTemp(temperature) {
    if(!temperature) return;
    return (<div className="current-temp">{formatTemperature(temperature)}{temperatureUnits}</div>);
  }

  apparentTemp(temperature){
    if(!this.props.big) return;
    if(!temperature) return;
    return (<div className="apparent-temp">
      Feels like <span>{formatTemperature(temperature)}{temperatureUnits}</span>
      </div>);
  }

  summary(summary){
    if(!summary) return;
    return (<p>{summary}</p>);
  }

  render() {
    const point = this.props.point;
    let pointClassNames = ['DarkSkyPoint'];
    let weatherIconHuge = false;

    if(this.props.big){
      pointClassNames.push('big');
      weatherIconHuge = true;
    }


    return (
      <div className={pointClassNames.join(' ')}>
      {this.minMaxTemp(point.temperatureHigh, point.temperatureLow)}
      {this.currentTemp(point.temperature)}
      <WeatherIcon icon={point.icon} huge={weatherIconHuge} />
      <div className="description">
      <time>{formatUnixDate(point.time)}</time>
      {this.apparentTemp(point.apparentTemperature)}
      {this.summary(point.summary)}
      </div>
      </div>
      );
  }
}

DarkSkyPoint.propTypes = {
  point: pointType,
  big: propTypes.bool,
};

export default DarkSkyPoint;
