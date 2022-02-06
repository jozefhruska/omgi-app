import { render } from '@testing-library/react';
import { Test } from './Test';

describe('Test', () => {
  it('Renders children correctly.', () => {
    const children = 'Content';

    const { getByText } = render(<Test>{children}</Test>);

    expect(getByText(children)).toBeVisible();
  });
});
