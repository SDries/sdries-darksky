import React, { Component } from 'react';

import './links.scss'

class Links extends Component {
  render(){
    return (
      <div className="Links">
        <a href="https://sdries.github.io/2019/03/29/weather-app.html" target="_blank">Article</a>
        <a href="https://github.com/SDries/sdries-darksky" target="_blank">GitHub</a>
      </div>
      );
  }
}

export default Links;
