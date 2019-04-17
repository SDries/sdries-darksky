import React, { Component } from 'react';
import propTypes from 'prop-types';

import './error.scss'

class Error extends Component {
	constructor(props) {
		super(props);

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		if(this.props.buttonDisabled) return;
		this.props.buttonOnClick();
	}

	render(){
		let button;
		if(this.props.buttonOnClick) {
			button = <button
			onClick={this.handleButtonClick}
			disabled={this.props.buttonDisabled}
			>{this.props.buttonLabel}</button>;
		}

		return (
			<div className="Error">
			<p>{this.props.message}</p>
			{button}
			</div>
			);
	}
}

Error.propTypes = {
	message: propTypes.string.isRequired,
	buttonOnClick: propTypes.func
};

Error.defaultProps = {
	buttonDisabled: false,
	buttonLabel: 'Click here to retry',
};

export default Error;
