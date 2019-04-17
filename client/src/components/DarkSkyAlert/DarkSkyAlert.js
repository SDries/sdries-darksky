import React, { Component } from 'react';

import { alertType } from '../../types';
import { formatUnixDate } from '../../helpers';

import './darkskyalert.scss';

class DarkSkyAlert extends Component {
  render() {
    const alert = this.props.alert;
    const severityClassname = "severity " + alert.severity;

    return (
      <details className="DarkSkyAlert">
      <summary>
      <div className={severityClassname}></div>
      <div className="title-time-wrapper">
      <div className="title">
      {alert.title}
      </div>
      <div className="time">
      <time>{formatUnixDate(alert.time)}</time>
      <span> - </span>
      <time>{formatUnixDate(alert.expires)}</time>
      </div>
      </div>
      </summary>
      <p>{alert.description}</p>
      <p>Regions: {alert.regions.join(', ')}</p>
      <a href={alert.url} target="_blank" rel='noreferrer noopener'>Read more</a>
      </details>
      );
  }
}

DarkSkyAlert.propTypes = {
  alert: alertType.isRequired,
};

export default DarkSkyAlert;
