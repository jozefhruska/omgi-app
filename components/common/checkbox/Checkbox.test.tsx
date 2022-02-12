import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Button', () => {
  const checkboxId = 'checkboxId';

  it('Renders a "checkbox" element by default.', () => {
    const { getByTestId } = render(<Checkbox data-testid={checkboxId} />);

    const checkbox = getByTestId(checkboxId);
    expect(checkbox).toBeVisible();
    expect(checkbox.tagName).toEqual('INPUT');
  });
});
