import { render } from '@testing-library/react';
import { Radio } from './Radio';

describe('Button', () => {
  const radioId = 'radioId';

  it('Renders a "radio input" element by default.', () => {
    const { getByTestId } = render(<Radio data-testid={radioId} />);

    const radio = getByTestId(radioId);
    expect(radio).toBeVisible();
    expect(radio).not.toHaveAttribute('checked');
    expect(radio.tagName).toEqual('INPUT');
  });
});
