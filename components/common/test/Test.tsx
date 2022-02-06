import React from 'react';

type TestProps = {
  children?: string;
};

// TODO: Delete me
export const Test = ({ children = 'Test' }: TestProps) => <>{children}</>;
