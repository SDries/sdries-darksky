import React, { Component } from 'react';
import propTypes from 'prop-types';

import icons from '../../assets/images/icons.js';
import './weathericon.scss';

class WeatherIcon extends Component {
	constructor(props) {
		super(props);

		this.defaultIcon = 'clear-day';
	}

	isIconAvailable(iconName) {
		return icons.hasOwnProperty(iconName);
	}

	getSvgPath(icon) {
		return <img src={icons[icon]} alt={icon} />;
	}

	render() {
		if(!this.props.icon) return null;
		let classNames = ['WeatherIcon'];
		if(this.props.big) classNames.push('big');
		if(this.props.huge) classNames.push('huge');

		return <div className={classNames.join(' ')}>
		{this.getSvgPath(this.props.icon)}
		</div>;
	}
}

WeatherIcon.propTypes = {
	icon: propTypes.string,
	big: propTypes.bool,
	huge: propTypes.bool,
}

export default WeatherIcon;
