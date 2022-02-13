import { render } from '@testing-library/react';
import { RadioTemplateGroup } from './RadioTemplateGroup';

describe('Button', () => {
  const radioGroupId = 'radioGroupId';

  it('Renders a "radio input" element by default.', () => {
    const { getByTestId } = render(
      <RadioTemplateGroup data-testid={radioGroupId} templates={[]} />
    );

    const radioGroup = getByTestId(radioGroupId);
    expect(radioGroup).toBeVisible();
    expect(radioGroup.tagName).toEqual('DIV');
  });
});
