import React from 'react';
import DarkSky from '../DarkSky';
import ShallowRenderer from 'react-test-renderer/shallow';
import { point, block } from '../../../helpers/darksky-mock';

describe('react-darksky', () => {
  test('renders without data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DarkSky />);
    const result = renderer.getRenderOutput();
    expect(result).toBeNull();
  });

  it('shallowly renders children correctly', () => {
    const apiMock = {
      alerts: [],
      flags: true,
      currently: point,
      daily: block,
    };
    const renderer = new ShallowRenderer();
    renderer.render(<DarkSky data={apiMock} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
