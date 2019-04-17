import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DarkSkyBlock from '../DarkSkyBlock';
import {block} from '../../../helpers/darksky-mock';

describe('react-darkskyblock', () =>{
  test('shallowly renders correctly', () => {
    const render = shallow(<DarkSkyBlock block={block} />);

    expect(toJson(render)).toMatchSnapshot();
  });
});
