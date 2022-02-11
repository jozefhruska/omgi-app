import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'placeholder' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'nickname',
  id: 'nickname',
  placeholder: 'Enter nickname',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  name: 'nickname',
  id: 'nickname',
  placeholder: 'Hold the door',
  disabled: true,
};

export const HasError = Template.bind({});
HasError.args = {
  type: 'text',
  name: 'nickname',
  id: 'nickname',
  placeholder: 'Oopsie Doopsie',
  hasError: true,
};
