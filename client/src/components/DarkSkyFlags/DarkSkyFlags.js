import React, { Component } from 'react';
import './darkskyflags.scss';

class DarkSkyFlags extends Component {
  render() {
  	const flags = this.props.data;
    if(!flags) return null;

  	let unavailable;
  	if(flags['darksky-unavailable']) {
  		unavailable = <p>The Dark Sky data source supports the given location, however a temporary error has made the data unavailable.</p>;
  	}

  	if(!unavailable) return null;

    return (
      <div className="DarkSkyFlags">
      {unavailable}
      </div>
      );
  }
}

export default DarkSkyFlags;
