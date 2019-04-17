import React, { Component } from 'react';
import DarkSkyAlerts from '../DarkSkyAlerts/DarkSkyAlerts';
import DarkSkyFlags from '../DarkSkyFlags/DarkSkyFlags';
import DarkSkyPoint from '../DarkSkyPoint/DarkSkyPoint';
import DarkSkyBlock from '../DarkSkyBlock/DarkSkyBlock';

class DarkSky extends Component {
  render() {
    if(!this.props.data) return null;

    let alerts, flags, currently, daily;
    if(this.props.data.alerts){
      alerts = <DarkSkyAlerts data={this.props.data.alerts} />;
    }
    if(this.props.data.flags){
      flags = <DarkSkyFlags data={this.props.data.flags} />;
    }
    if(this.props.data.currently){
      currently = <DarkSkyPoint point={this.props.data.currently} big />
    }
    if(this.props.data.daily){
      daily = <DarkSkyBlock block={this.props.data.daily} />
    }

    return (
      <div>
        {alerts}
        {currently}
        {daily}
        {flags}
      </div>
      );
  }
}

export default DarkSky;
