import { render } from '@testing-library/react';
import KataFooter from './kata-footer';
describe('KataFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KataFooter />);
    expect(baseElement).toBeTruthy();
  });
});
