import React from 'react';
import LocationSelector from '../LocationSelector';
import renderer from 'react-test-renderer';

describe('react-locationselector', () => {
  test('renders with fallbackLocation', () => {
    const location = {
      longitude: 0,
      latitude: 0,
    };
    const fallbackLocation = {
      longitude: 1,
      latitude: 1,
    };
    const tree = renderer.create(<LocationSelector lazy onChange={() => {}} location={location} fallbackLocation={fallbackLocation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
