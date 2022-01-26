import {render} from '@testing-library/react';
import If from './if';
import Else from "../else/else";
import renderer from "react-test-renderer";

describe('If', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<If/>);
    expect(baseElement).toBeTruthy();
  });

  it('no condition then return null', () => {
    const tree = renderer.create(<If/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('condition is true then show text: ok', () => {
    const current = 1
    const tree = renderer.create(<If cond={current === 1}> ok</If>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('condition is true then show text: Hello World', () => {
    const current = 1
    const tree = renderer.create(<If cond={current === 1}>
      <div>Hello</div>
      <Else>No World</Else><p>World</p></If>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('condition is false then show text: No World', () => {
    const current = 2
    const tree = renderer.create(<If cond={current === 1}>Hello <Else>No World</Else></If>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('condition is true then show Hello World', () => {
    const current = 1
    const {baseElement} = render(<If cond={current === 1}>
      Hello
      <div> World, </div>
      <div><p>my friend</p></div>
      <Else>Sorry, no results</Else>
    </If>);
    expect(baseElement.textContent.trim()).toBe("Hello World, my friend");
  });

  it('condition is false then show text: Sorry no results', () => {
    const current = 2
    const {baseElement} = render(<If cond={current === 1}>
      Hello
      <div> World, </div>
      <div><p>my friend</p></div>
      <Else>Sorry, no results</Else>
    </If>);
    expect(baseElement.textContent.trim()).toBe("Sorry, no results");
  });
  
});
