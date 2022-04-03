import { Fragment, ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

import styles from './TemplateRadioGroup.module.css';

type TemplateRadioGroupProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  children: ReactNode;
};

export const TemplateRadioGroup = ({
  label,
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
    <RadioGroup.Label className={styles.label}>{label}</RadioGroup.Label>

    <div className={styles.options}>{children}</div>
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
  <RadioGroup.Option as={Fragment} value={value}>
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

TemplateRadioGroup.Option = TemplateRadioGroupOption;
