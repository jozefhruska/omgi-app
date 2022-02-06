import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonAnchorProps = {
  as: 'a';
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

type ButtonButtonProps = {
  as?: 'button';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type ButtonProps = { kind?: 'primary' | 'secondary'; children: string } & (
  | ButtonButtonProps
  | ButtonAnchorProps
);

export const Button = ({
  kind = 'primary',
  children,
  className,
  ...props
}: ButtonProps) => {
  if (props.as === 'a') {
    const { as, ...rest } = props;

    return (
      <a {...rest} className={clsx(styles.main, styles[kind], className)}>
        {children}
      </a>
    );
  }

  const { as, type = 'button', ...rest } = props;

  return (
    <button
      {...rest}
      type={type}
      className={clsx(styles.main, styles[kind], className)}
    >
      {children}
    </button>
  );
};
