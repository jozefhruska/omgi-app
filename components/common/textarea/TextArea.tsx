import { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './TextArea.module.css';

type TextAreaProps = {
  hasError?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  hasError = false,
  className,
  ...props
}: TextAreaProps) => {
  const { rows, name, id, placeholder, ...rest } = props;

  return (
    <textarea
      {...rest}
      name={name}
      id={id}
      rows={rows}
      placeholder={placeholder}
      className={clsx(styles.main, hasError && styles.invalid, className)}
    />
  );
};
