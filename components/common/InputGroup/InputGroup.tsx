import React, { ReactNode } from 'react';
import styles from './InputGroup.module.css';

type InputGroupProps = {
  id: string;
  label: string;
  children: ReactNode;
  errorMessage?: string;
};

export const InputGroup: React.VFC<InputGroupProps> = ({
  id,
  label,
  children,
  errorMessage,
}) => (
  <div className={styles.wrapper}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <div>{children}</div>
    {!!errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </div>
);
