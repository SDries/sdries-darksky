import React, { Component } from 'react';
import propTypes from 'prop-types';

import Error from '../Error/Error';
import DarkSky from '../DarkSky/DarkSky';

import './darkskyapifetcher.scss';

class DarkSkyApiFetcher extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetchingApiData: false,
      apiError: null,
      apiResponse: null,
    };
    this.fetchApiData = this.fetchApiData.bind(this);
  }

  componentDidMount() {
    this.fetchApiData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.endpoint !== prevProps.endpoint){
      this.fetchApiData();
    }
  }

  fetchApiData() {
    this.callApi(this.props.endpoint)
    .then(response => this.handleApiResponse(response))
    .catch(error => this.handleApiError(error));
  }

  callApi = async (endpoint) => {
    this.setState({fetchingApiData: true});
    const response = await fetch(endpoint);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  handleApiError(response) {
    this.setState({
      apiResponse: null,
      apiError: 'Sorry, I was unable to look up the weather for your location.',
      fetchingApiData: false,
    });
  }

  handleApiResponse(response) {
    if(response.error) {
      this.handleApiError(response);
      return;
    }

    this.setState({
      apiResponse: response,
      apiError: null,
      fetchingApiData: false,
    });
  }

  getLoading() {
    if(!this.state.fetchingApiData) return null;
    return <div className="DarkSkyApiFetcher-loading"><div className="lds-facebook"><div></div><div></div><div></div></div></div>;
  }

  render() {
    if(this.state.fetchingApiData) return this.getLoading();

    if(!this.state.apiError && ! this.state.apiResponse) return null;

    let error;
    if(this.state.apiError) {
      error = <Error message={this.state.apiError} buttonOnClick={this.fetchApiData} buttonDisabled={this.state.fetchingApiData} />;
    }

    let darkSky;
    if(this.state.apiResponse && !this.state.apiError) {
      darkSky = <DarkSky data={this.state.apiResponse} />;
    }

    return <div>
    {error}
    {darkSky}
    </div>;
  }
}

DarkSkyApiFetcher.propTypes = {
  endpoint: propTypes.string.isRequired,
}

export default DarkSkyApiFetcher;
