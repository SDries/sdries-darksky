import React from 'react';
import DarkSkyFlags from '../DarkSkyFlags';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('react-darkskyflags', () => {
  test('renders without data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DarkSkyFlags />);
    const result = renderer.getRenderOutput();
    expect(result).toBeNull();
  });

  it('shallowly renders unavailable correctly', () => {
    const apiMock = {
      'darksky-unavailable': true
    };
    const renderer = new ShallowRenderer();
    renderer.render(<DarkSkyFlags data={apiMock} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
