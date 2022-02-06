import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  const children = 'Try chopping broccoli kebab blended with cream.';

  it('Renders a "button" element by default.', () => {
    const { getByText } = render(<Button>{children}</Button>);

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button.tagName).toEqual('BUTTON');
  });

  it('Renders a "button" element if "as" property is set to "button".', () => {
    const { getByText } = render(<Button as="button">{children}</Button>);

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button.tagName).toEqual('BUTTON');
  });

  it('Renders a "a" element if "as" property is set to "a".', () => {
    const { getByText } = render(<Button as="a">{children}</Button>);

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button.tagName).toEqual('A');
  });
});
