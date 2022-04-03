import React from 'react';
import { Button } from '../../common/button/Button';
import { FORM_WRAPPER_ID } from '../preview-form/PreviewForm';

import styles from './HeroSection.module.css';

export const HeroSection = () => (
  <header className={styles.wrapper}>
    <div className="text-center">
      <h1 className={styles.heading}>
        Oh My <span className="text-green-500">Graph Image</span>
      </h1>
      <p className={styles.description}>
        Generate custom Open Graph images dynamically in a matter of
        seconds. Choose the template you like and generate the OG image
        with a <strong>simple HTTP GET request</strong>.
      </p>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => {
            const formWrapper = document?.getElementById(FORM_WRAPPER_ID);

            if (!formWrapper) {
              return;
            }

            window.scrollTo({
              top: formWrapper.offsetTop - 20,
              behavior: 'smooth',
            });
          }}
        >
          Give it a try! It&apos;s free!
        </Button>
      </div>
    </div>
  </header>
);
