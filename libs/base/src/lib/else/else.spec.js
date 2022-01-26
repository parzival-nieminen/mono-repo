import {render} from '@testing-library/react';
import Else from './else';
import renderer from "react-test-renderer";

describe('Else', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Else/>);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const tree = renderer.create(<Else/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('show text: Hello World', () => {
    const tree = renderer.create(<Else>Hello World</Else>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('show text: Hello World my friend', () => {
    const {baseElement} = render(<Else>
      Hello
      <div> World, </div>
      <div><p>my friend</p></div>
    </Else>);
    expect(baseElement.textContent.trim()).toBe("Hello World, my friend");
  });

});
