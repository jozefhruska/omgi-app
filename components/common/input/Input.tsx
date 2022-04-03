import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

type InputProps = { hasError?: boolean } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children'
>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, className, ...props }, ref) => {
    const { type, name, id, placeholder, ...rest } = props;

    return (
      <input
        {...rest}
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={clsx(
          styles.main,
          { [styles.invalid]: hasError },
          className
        )}
      />
    );
  }
);
