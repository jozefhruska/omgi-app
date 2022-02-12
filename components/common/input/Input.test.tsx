import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  const inputProps = { id: 'email', initialValue: 'itisone@mail.com' };

  it('Renders an "input" element by default.', () => {
    const { getByDisplayValue } = render(
      <Input id={inputProps.id} value={inputProps.initialValue} readOnly />
    );

    const input = getByDisplayValue(inputProps.initialValue);
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('id', inputProps.id);
    expect(input.tagName).toEqual('INPUT');
  });
});
