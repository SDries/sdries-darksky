import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LocationSelector from '../LocationSelector/LocationSelector';
import DarkSkyApiFetcher from '../DarkSkyApiFetcher/DarkSkyApiFetcher';
import Links from '../Links/Links';

import './app.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location : {
        longitude: null,
        latitude: null,
      },
    };
    this.fallbackLocation = {
      message: 'I\'ll use Bruges as your location.',
      location: {
        longitude: 3.225200,
        latitude: 51.209419,
      }
    };
  }

  /**
   * gets the API endpoint
   * @param  {string} path
   * @param  {object} location object with longitude and latitude
   * @return {string}
   */
   getApiEndpoint(path, location) {
    if(!location.longitude || !location.latitude) return;
    return `/api/${path}/${location.longitude}/${location.latitude}`;
  }

  handleLocationChange(location) {
    this.setState({location: location});
  }

  getDarkSkyApiFetcher(endpointPath) {
    const endpoint = this.getApiEndpoint(endpointPath, this.state.location);
    if(!endpoint) return null;
    return () => <DarkSkyApiFetcher endpoint={endpoint} />;
  }

  getNoMatch() {
    return () => <div>Sorry, I don't know what you're looking for.</div>;
  }

  render() {
    return (
      <div className="App">
      <Links />
      <LocationSelector
      location={this.state.location}
      fallbackLocation={this.fallbackLocation.location}
      fallbackMessage={this.fallbackLocation.message}
      onChange={ (location) => this.handleLocationChange(location) }
      />
      <Router>
      <div>
      <nav>
      <Link to="/">This week</Link>
      <Link to="/past30days">Past 30 days</Link>
      </nav>
      <Switch>
      <Route exact path="/" component={this.getDarkSkyApiFetcher('forecast')}/>
      <Route path="/past30days" component={this.getDarkSkyApiFetcher('timemachine')}/>
      <Route component={this.getNoMatch()}/>
      </Switch>
      </div>
      </Router>
      </div>
      );
  }
}

export default App;
