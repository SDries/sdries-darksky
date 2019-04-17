import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DarkSkyAlert from '../DarkSkyAlert';
import {alert} from '../../../helpers/darksky-mock';

describe('react-darkskyalerts', () => {
  test('renders correctly', () => {
    const apiAlert = alert;

    const render = shallow(<DarkSkyAlert alert={apiAlert} />);

    expect(toJson(render)).toMatchSnapshot();
  });
});
