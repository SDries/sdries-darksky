import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import WeatherIcon from '../WeatherIcon';

describe('react-weathericon', () => {
  test('renders nothing without icon name', () => {
    const iconComponent = mount((<WeatherIcon />));
    expect(toJson(iconComponent)).toMatchSnapshot();
  });

  test('renders icon when name is provided', () => {
    const iconComponent = mount((<WeatherIcon icon="clear-day"/>));
    expect(toJson(iconComponent)).toMatchSnapshot();
  });

  test('renders icon without "big" or "huge" className', () => {
    const iconComponent = mount((<WeatherIcon icon="iconName"/>));
    expect(iconComponent.find('.WeatherIcon').hasClass('big')).toBeFalsy();
    expect(iconComponent.find('.WeatherIcon').hasClass('huge')).toBeFalsy();
  });

  test('renders icon with "big" className', () => {
    const iconComponent = mount((<WeatherIcon icon="iconName" big/>));
    expect(iconComponent.find('.WeatherIcon').hasClass('big')).toBeTruthy();
  });

  test('renders icon with "huge" className', () => {
    const iconComponent = mount((<WeatherIcon icon="iconName" huge/>));
    expect(iconComponent.find('.WeatherIcon').hasClass('huge')).toBeTruthy();
  });
});
