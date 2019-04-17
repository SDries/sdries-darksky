import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DarkSkyPoint from '../DarkSkyPoint';
import {point} from '../../../helpers/darksky-mock';

describe('react-darkskypoint', () => {
  test('shallowly renders correctly', () => {
    const render = shallow(<DarkSkyPoint point={point} />);

    expect(toJson(render)).toMatchSnapshot();
  });

  test('shallowly renders big correctly', () => {
    const render = shallow(<DarkSkyPoint point={point} big />);

    expect(toJson(render)).toMatchSnapshot();
  });

});
