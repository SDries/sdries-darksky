import React from 'react';
import DarkSkyAlerts from '../DarkSkyAlerts';
import ShallowRenderer from 'react-test-renderer/shallow';
import {alert} from '../../../helpers/darksky-mock';

describe('react-darkskyalerts', () => {
  it('shallowly renders one child', () => {
    const apiMock = [alert];

    const renderer = new ShallowRenderer();
    renderer.render(<DarkSkyAlerts data={apiMock} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('shallowly renders multiple children', () => {
    const apiMock = [alert, alert];

    const renderer = new ShallowRenderer();
    renderer.render(<DarkSkyAlerts data={apiMock} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
