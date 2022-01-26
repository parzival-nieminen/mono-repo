import {fireEvent, render, screen} from '@testing-library/react';
import KataButton from './kata-button';
import renderer from 'react-test-renderer';

describe('KataButton', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<KataButton/>);
    expect(baseElement).toBeTruthy();
  });
  it('is disabled', () => {
    const tree = renderer.create(<KataButton disabled text={"My Button"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has no label as text', () => {
    const tree = renderer.create(<KataButton/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with subtext no data selected', () => {
    const tree = renderer.create(<KataButton text={"Save"}>no data selected</KataButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('onClick called 1 and Save arg is included', () => {
    const func = jest.fn()
    render(<KataButton text={"Save"} onClick={func}>no data selected</KataButton>)

    fireEvent.click(screen.getByRole("button"))

    expect(func).toHaveBeenCalledWith(expect.anything(), "Button 'Save' is called")
    expect(func).toHaveBeenCalledTimes(1)
  });
});
