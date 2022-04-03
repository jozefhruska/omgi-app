import React from 'react';
import { SOCIAL_NETWORKS_LINKS } from '../../../helpers/constants';

import styles from './Footer.module.css';

export const Footer: React.VFC = () => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <div className="flex justify-center space-x-6 md:order-2">
        {SOCIAL_NETWORKS_LINKS.map(({ key, name, href, Icon }) => (
          <a key={key} href={href} className={styles.socialsLinks}>
            <span className="sr-only">{name}</span>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-base text-gray-400">
          Created by{' '}
          <a
            href="https://twitter.com/_jopear"
            className={styles.authorLink}
          >
            Jozef Hruška
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/alesed"
            className={styles.authorLink}
          >
            Aleš Sedláček
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);
