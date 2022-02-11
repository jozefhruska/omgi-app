import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

type InputProps = { hasError?: boolean } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children'
>;

export const Input = ({
  hasError = false,
  className,
  ...props
}: InputProps) => {
  const { type, name, id, placeholder, ...rest } = props;

  return (
    <input
      {...rest}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={clsx(styles.main, hasError && styles.invalid, className)}
    />
  );
};
