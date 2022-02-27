import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  TemplateRadioGroup,
  TemplateRadioGroupOptionProps,
} from './TemplateRadioGroup';
import BasicTemplateImage from '../../../public/images/templates/basic.svg';
import ArticleTemplateImage from '../../../public/images/templates/article.svg';

const OPTIONS: TemplateRadioGroupOptionProps[] = [
  {
    value: 'basic',
    heading: 'Basic',
    description: 'Description',
    image: BasicTemplateImage,
  },
  {
    value: 'article',
    heading: 'Article',
    description: 'Description',
    image: ArticleTemplateImage,
  },
];

export default {
  title: 'Templates/TemplateRadioGroup',
  component: TemplateRadioGroup,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'changed',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TemplateRadioGroup>;

const TemplateDefault: ComponentStory<typeof TemplateRadioGroup> = (
  args
) => (
  <TemplateRadioGroup {...args}>
    {OPTIONS.map((props) => (
      <TemplateRadioGroup.Option key={props.value} {...props} />
    ))}
  </TemplateRadioGroup>
);

export const Default = TemplateDefault.bind({});
Default.args = { value: 'basic', disabled: false };
