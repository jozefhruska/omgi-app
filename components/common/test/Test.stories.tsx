import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Test } from './Test';

export default {
  title: 'Common/Test',
  component: Test,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};
