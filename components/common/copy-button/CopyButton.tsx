import React, { useState } from 'react';

import styles from './CopyButton.module.css';

type CopyButtonProps = {
  value: string;
};

export const CopyButton: React.VFC<CopyButtonProps> = ({ value }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const onClick = () => {
    void navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};
