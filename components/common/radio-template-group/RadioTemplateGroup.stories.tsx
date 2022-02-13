import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RadioTemplateGroup, TemplateItem } from './RadioTemplateGroup';

const TEMPLATES: TemplateItem[] = [
  {
    id: 1,
    value: 'default',
    img: 'https://png.clipart.me/previews/ab0/gamepad-icon-psd-45766.jpg',
  },
  {
    id: 2,
    value: 'article',
    img: 'https://png.clipart.me/previews/ab0/gamepad-icon-psd-45766.jpg',
  },
];

export default {
  title: 'Common/RadioTemplateGroup',
  component: RadioTemplateGroup,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof RadioTemplateGroup>;

const TemplateDefault: ComponentStory<typeof RadioTemplateGroup> = (
  args
) => <RadioTemplateGroup {...args} />;

export const Default = TemplateDefault.bind({});
Default.args = { templates: TEMPLATES };

const TemplateDisabled: ComponentStory<typeof RadioTemplateGroup> = (
  args
) => <RadioTemplateGroup {...args} />;

export const Disabled = TemplateDisabled.bind({});
Disabled.args = {
  disabled: true,
};
