import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
