import { render } from '@testing-library/react';
import KataHeader from './kata-header';
describe('KataHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KataHeader />);
    expect(baseElement).toBeTruthy();
  });
});
