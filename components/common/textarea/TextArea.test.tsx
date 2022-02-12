import { render } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  const textAreaProps = {
    id: 'comment',
    initialValue: 'leave some note...',
  };

  it('Renders an "textarea" element by default.', () => {
    const { getByDisplayValue } = render(
      <TextArea
        id={textAreaProps.id}
        value={textAreaProps.initialValue}
        readOnly
      />
    );

    const textArea = getByDisplayValue(textAreaProps.initialValue);
    expect(textArea).toBeVisible();
    expect(textArea).toHaveAttribute('id', textAreaProps.id);
    expect(textArea.tagName).toEqual('TEXTAREA');
  });
});
