import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonKind = 'primary' | 'secondary';

type ButtonAsAnchorProps = {
  as?: 'a';
  type?: never;
} & Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'className' | 'href' | 'rel' | 'target'
>;

type ButtonAsButtonProps = {
  as?: 'button';
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled' | 'type'
>;

type ButtonCommonProps = {
  kind?: ButtonKind;
  children: string;
  onClick?: () => void;
};

type ButtonProps = ButtonCommonProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

export const Button = ({
  as: Element = 'button',
  kind = 'primary',
  children,
  className,
  ...props
}: ButtonProps) => (
  <Element
    {...props}
    type={props.type ?? 'button'}
    className={clsx(styles.main, styles[kind], className)}
  >
    {children}
  </Element>
);
