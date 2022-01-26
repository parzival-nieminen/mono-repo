import { render } from '@testing-library/react';
import KataLabel from './kata-label';
describe('KataLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KataLabel />);
    expect(baseElement).toBeTruthy();
  });
});
