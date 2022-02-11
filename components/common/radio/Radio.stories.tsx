import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

export default {
  title: 'Common/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Radio>;

const TemplateDefault: ComponentStory<typeof Radio> = (args) => (
  <div className={'space-x-2'}>
    <Radio {...args} name="group1" id="first" />
    <Radio {...args} name="group1" id="second" />
  </div>
);

export const Default = TemplateDefault.bind({});
Default.args = {};

const TemplateDisabled: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
);

export const Disabled = TemplateDisabled.bind({});
Disabled.args = {
  disabled: true,
};
