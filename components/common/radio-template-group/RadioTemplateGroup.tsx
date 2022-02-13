import clsx from 'clsx';
import { InputHTMLAttributes, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';

import styles from './RadioTemplateGroup.module.css';

export type TemplateItem = {
  id: number;
  value: string;
  imgUrl: string;
};

type RadioTemplateGroupProps = {
  templates: TemplateItem[];
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioTemplateGroup = ({
  templates = [],
  className,
  ...props
}: RadioTemplateGroupProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <RadioGroup
      {...props}
      value={selectedTemplate}
      onChange={setSelectedTemplate}
    >
      <div className={clsx(styles.group)}>
        {templates.map((templateItem) => (
          <RadioGroup.Option
            key={templateItem.id}
            value={templateItem.value}
            className={clsx(styles.option)}
          >
            {({ checked, active }) => (
              <>
                <div
                  className={clsx(
                    styles.container,
                    { [styles.active]: active },
                    { [styles.checked]: checked }
                  )}
                  aria-hidden="true"
                  style={{
                    backgroundImage: `url(${templateItem.imgUrl})`,
                  }}
                />
                <CheckCircleIcon
                  className={clsx(
                    !checked ? 'invisible' : '',
                    styles.badge
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
