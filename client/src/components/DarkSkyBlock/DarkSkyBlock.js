import React, { Component } from 'react';
import propTypes from 'prop-types';

import DarkSkyPoint from '../DarkSkyPoint/DarkSkyPoint';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { blockType } from '../../types';

import './darkskyblock.scss';

class DarkSkyBlock extends Component {
  getHeader() {
    if(!this.props.block.summary && !this.props.block.icon) return null;
    const summary = (this.props.block.summary)? <p>{this.props.block.summary}</p> : null;
    return (<header>
      <WeatherIcon icon={this.props.block.icon} big/>
      {summary}
      </header>);
  }
  render() {
    return (
      <section className="DarkSkyBlock">
      {this.getHeader()}
      <div className="points">
      { this.props.block.data.map((point) => <DarkSkyPoint key={point.time} point={point} />) }
      </div>
      </section>
      );
  }
}

DarkSkyBlock.propTypes = {
  block: propTypes.shape(blockType)
};

export default DarkSkyBlock;
