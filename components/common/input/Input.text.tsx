import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  const inputId = 'email';

  it('Renders an "input" element by default.', () => {
    const { getByTestId } = render(<Input id={inputId} />);

    const input = getByTestId(inputId);
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('id', inputId);
    expect(input.tagName).toEqual('INPUT');
  });
});
