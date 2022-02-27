import { ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';

import styles from './TemplateRadioGroup.module.css';
import clsx from 'clsx';
import { CheckCircleIcon } from '@heroicons/react/solid';

type TemplateRadioGroupProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  children: ReactNode;
};

export const TemplateRadioGroup = ({
  value,
  onChange,
  disabled = false,
  children,
}: TemplateRadioGroupProps) => (
  <RadioGroup<'div', string>
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={styles.group}
  >
    {children}
  </RadioGroup>
);

export type TemplateRadioGroupOptionProps = {
  value: string;
  heading: string;
  description: string;
  image: StaticImageData;
};

const TemplateRadioGroupOption = ({
  value,
  heading,
  description,
  image,
}: TemplateRadioGroupOptionProps) => (
  <RadioGroup.Option value={value}>
    {({ active, checked }) => (
      <div
        className={clsx(styles.option, {
          [styles.active]: active,
          [styles.checked]: checked,
        })}
      >
        <span className={styles.imageWrapper}>
          <Image src={image} alt={`${heading} template preview image`} />
        </span>
        <RadioGroup.Label as="span" className={styles.heading}>
          {heading}

          <CheckCircleIcon
            className={clsx(!checked ? 'invisible' : '', styles.icon)}
            aria-hidden="true"
          />
        </RadioGroup.Label>
        <RadioGroup.Description as="span" className={styles.description}>
          {description}
        </RadioGroup.Description>
      </div>
    )}
  </RadioGroup.Option>
);

type TemplateRadioGroupLabelProps = {
  children: ReactNode;
};

const TemplateRadioGroupLabel = ({
  children,
}: TemplateRadioGroupLabelProps) => (
  <RadioGroup.Label>{children}</RadioGroup.Label>
);

TemplateRadioGroup.Option = TemplateRadioGroupOption;
TemplateRadioGroup.Label = TemplateRadioGroupLabel;
