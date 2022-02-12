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
  return (
    <textarea
      {...props}
      className={clsx(
        styles.main,
        {
          [styles.invalid]: hasError,
        },
        className
      )}
    />
  );
};
