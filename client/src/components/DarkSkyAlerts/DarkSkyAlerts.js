import React, { Component } from 'react';
import DarkSkyAlert from '../DarkSkyAlert/DarkSkyAlert';
import propTypes from 'prop-types';
import { alertType } from '../../types';
import './darkskyalerts.scss';

class DarkSkyAlerts extends Component {
	render() {
		const alerts = this.props.data;

    return (
      <div className="DarkSkyAlerts">
      { alerts.map((alert) => <DarkSkyAlert key={alert.time} alert={alert} />) }
      </div>
      );
  }
}


DarkSkyAlerts.propTypes = {
	data: propTypes.arrayOf(alertType).isRequired,
};

export default DarkSkyAlerts;
