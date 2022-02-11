import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

import styles from './Radio.module.css';

type RadioProps = InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ className, ...props }: RadioProps) => {
  const { ...rest } = props;

  return (
    <input
      {...rest}
      type="radio"
      className={clsx(styles.main, className)}
    />
  );
};
