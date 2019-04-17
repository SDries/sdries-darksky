import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../App';

describe('react-app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('gets apiEndpoint for location', () => {
    const location = {longitude: 1, latitude: 2};
    const endpointPath = 'forecast';

    const wrapper = shallow(<App />);
    const endpoint = wrapper.instance().getApiEndpoint(endpointPath, location);

    expect(endpoint).toBe(`/api/${endpointPath}/1/2`);
  });

  it('gets no apiEndpoint for empty location', () => {
    const location = {longitude: null, latitude: null};
    const endpointPath = 'forecast';

    const wrapper = shallow(<App />);
    const endpoint = wrapper.instance().getApiEndpoint(endpointPath, location);

    expect(endpoint).toBeFalsy();
  });
});
