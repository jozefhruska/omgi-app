import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Checkbox.module.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={clsx(styles.main, className)}
    />
  );
};
