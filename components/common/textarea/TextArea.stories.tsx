import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'Common/TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const HasError = Template.bind({});
HasError.args = {
  hasError: true,
};
