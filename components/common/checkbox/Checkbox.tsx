import { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

import styles from './Checkbox.module.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const { ...rest } = props;

  return (
    <input
      {...rest}
      type="checkbox"
      className={clsx(styles.main, className)}
    />
  );
};
