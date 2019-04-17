import React, { Component } from 'react';
import Error from '../Error/Error';
import propTypes from 'prop-types';

import './locationselector.scss';

class LocationSelector extends Component {
  constructor(props){
    super(props);

    this.state = {
      fetchingLocation: !this.props.lazy,
      error: undefined,
      location: props.location,
      fallbackMessage: null,
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  componentWillMount () {
    if (typeof window !== 'object') {
      this.setFallbackLocation();
      return;
    }

    if (!('geolocation' in window.navigator)) {
      this.setFallbackLocation();
      return;
    }

    if (this.props.lazy) {
      this.setFallbackLocation();
      return
    }

    this.getCurrentLocation();
  }

  /**
   * If the component will unmount cancel any geolocation calls
   */
   componentWillUnmount () {
    this.willUnmount = true;
  }

  setFallbackLocation(state) {
    this.setLocation(this.props.fallbackLocation);
    if(this.props.fallbackMessage) {
      this.setState({fallbackMessage: this.props.fallbackMessage});
    }
  }

  setLocation(location) {
    this.setState({
      location: location,
      message: null,
      fallbackMessage: null,
    });
    this.props.onChange(location);
  }

  getCurrentLocation() {
    this.setState({ fetchingLocation: true });

    return window.navigator.geolocation.getCurrentPosition(
      location => {
        if (this.willUnmount) return;

        this.setState({
          error: undefined,
          fetchingLocation: false,
        });

        this.setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }, error => {
        if (this.willUnmount) return;
        this.handleError(error);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
  }

  handleError(error) {
    this.setState({
      fetchingLocation: false,
      error: error,
    });
    this.setFallbackLocation();
  }

  getLocationMessage(param, value) {
    if(!value) return null;
    return <p>Your {param} is <span>{value}</span>.</p>;
  }

  getFallbackMessage() {
    if(!this.state.fallbackMessage) return null;
    return <p>{this.state.fallbackMessage}</p>;
  }

  getErrorMessage() {
    if(!this.state.error) return null;
    return <Error message="I was unable to determine your location." buttonOnClick={this.getCurrentLocation} buttonDisabled={this.state.fetchingLocation} />;
  }

  render() {
    return (
      <div className="LocationSelector">
      {this.getErrorMessage()}
      {this.getFallbackMessage()}
      {this.getLocationMessage('longitude', this.state.location.longitude)}
      {this.getLocationMessage('latitude', this.state.location.latitude)}
      </div>
      );
  }
}

LocationSelector.propTypes = {
  location: propTypes.object,
  fallbackLocation: propTypes.object,
  onChange: propTypes.func,
  lazy: propTypes.bool,
  fallbackMessage: propTypes.string,
};

LocationSelector.defaultProps = {
  lazy: false,
}

export default LocationSelector;
