import React from 'react';
import Error from '../Error';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('react-error', () => {
  test('renders with message', () => {
    const tree = renderer.create(<Error message="message"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders with button', () => {
    const mockCallBack = jest.fn();
    const tree = renderer.create(<Error message="message" buttonOnClick={mockCallBack}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('button callback is called on click', () => {
    const mockCallBack = jest.fn();
    const error = shallow((<Error message="message" buttonOnClick={mockCallBack} />));

    const button = error.find('button');
    button.simulate('click');

    expect(button.prop('disabled')).toBeFalsy();
    expect(button.text()).toBe('Click here to retry');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test('disabled button doesn\'t call callback', () => {
    const mockCallBack = jest.fn();
    const label = "label";
    const error = shallow((<Error message="message" buttonOnClick={mockCallBack} buttonDisabled={true} buttonLabel={label} />));

    const button = error.find('button');
    button.simulate('click');

    expect(button.prop('disabled')).toBeTruthy();
    expect(button.text()).toBe(label);
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });

});
