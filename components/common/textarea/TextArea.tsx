import { forwardRef, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './TextArea.module.css';

type TextAreaProps = {
  hasError?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ hasError = false, className, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={clsx(
          styles.main,
          {
            [styles.invalid]: hasError,
          },
          className
        )}
      />
    );
  }
);
