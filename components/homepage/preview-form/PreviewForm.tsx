import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import BasicTemplateImage from '../../../public/images/templates/basic.svg';
import ArticleTemplateImage from '../../../public/images/templates/article.svg';
import { TemplateRadioGroup } from '../template-radio-group/TemplateRadioGroup';
import { InputGroup } from '../../common/InputGroup/InputGroup';
import { Input } from '../../common/input/Input';
import { TextArea } from '../../common/textarea/TextArea';
import { DEPLOYMENT_URL } from '../../../helpers/constants';
import { Button } from '../../common/button/Button';
import { CopyButton } from '../../common/copy-button/CopyButton';
import { basicTemplateValidationSchema } from '../../../templates/basic';
import { articleTemplateValidationSchema } from '../../../templates/article';
import { getCode } from '../../../helpers/code';
import styles from './PreviewForm.module.css';

Refractor.registerLanguage(js);

export const FORM_WRAPPER_ID = 'PreviewForm-wrapper';

const REQUIRED_FIELD_MESSAGE = 'This field is required.';

export type PreviewFormData = {
  template: 'basic' | 'article';
  heading: string;
  description: string;

  // Basic
  badge?: string;

  // Article
  authorName?: string;
  authorAvatarUrl?: string;
  meta?: string;
};

const DEFAULT_TEMPLATE: PreviewFormData['template'] = 'basic';

const DEFAULT_VALUES_BASIC: Pick<
  PreviewFormData,
  'heading' | 'description' | 'badge'
> = {
  heading: "Daily culinary inspirations from the World's best chefs.",
  description:
    'Instead of soaking thin cream with chicken, use one container iced tea and eight tablespoons anise casserole.',
  badge: 'Culinary Inspirations',
};

const DEFAULT_VALUES_ARTICLE: Omit<
  PreviewFormData,
  'template' | 'heading' | 'description' | 'badge'
> = {
  authorName: 'Luigi Beneventi',
  authorAvatarUrl:
    'https://cdn.pixabay.com/photo/2020/07/24/18/19/chief-5434741_1280.png',
  meta: 'Published on April 1, 2022',
};

export const PreviewForm: React.VFC = () => {
  const [previewUrl, setPreviewUrl] = useState<string>(
    DEPLOYMENT_URL +
      `/api/generate/${DEFAULT_TEMPLATE}?` +
      new URLSearchParams(DEFAULT_VALUES_BASIC)
  );

  const [code, setCode] = useState<string>(
    getCode({
      template: DEFAULT_TEMPLATE,
      ...DEFAULT_VALUES_BASIC,
    })
  );

  const { control, handleSubmit, register, watch, formState } =
    useForm<PreviewFormData>({
      defaultValues: {
        template: DEFAULT_TEMPLATE,
        ...DEFAULT_VALUES_BASIC,
        ...DEFAULT_VALUES_ARTICLE,
      },
    });

  const onSubmit = handleSubmit(async ({ template, ...values }) => {
    // @ts-ignore
    let params;

    switch (template) {
      case 'basic': {
        params = basicTemplateValidationSchema.parse(values);
        break;
      }

      case 'article': {
        params = articleTemplateValidationSchema.parse(values);
        break;
      }
    }

    const url =
      DEPLOYMENT_URL +
      `/api/generate/${template}?` +
      new URLSearchParams(params);

    await fetch(url)
      .then(() => {
        setPreviewUrl(url);
        setCode(
          getCode({
            template,
            // @ts-ignore
            ...params,
          })
        );
      })
      .catch(() => {
        console.log('error');
      });
  });

  const template = watch('template');

  return (
    <div className={styles.wrapper} id={FORM_WRAPPER_ID}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.dot}>1/4</span>
            <span>Select a template</span>
          </h2>

          <Controller<PreviewFormData>
            name="template"
            control={control}
            render={({ field }) => (
              <TemplateRadioGroup
                label="Template"
                value={field.value!}
                onChange={field.onChange}
              >
                <TemplateRadioGroup.Option
                  value="basic"
                  heading="Basic"
                  description="Description"
                  image={BasicTemplateImage}
                />
                <TemplateRadioGroup.Option
                  value="article"
                  heading="Article"
                  description="Description"
                  image={ArticleTemplateImage}
                />
                <div className="flex h-full items-center justify-center rounded-lg bg-gray-100 p-4">
                  More coming soon...
                </div>
              </TemplateRadioGroup>
            )}
          />
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.dot}>2/4</span>
            <span>Enter values</span>
          </h2>

          <InputGroup
            id="Common-Heading"
            label="Heading"
            errorMessage={formState.errors.heading?.message}
          >
            <Input
              id="Common-Heading"
              {...register('heading', {
                required: REQUIRED_FIELD_MESSAGE,
              })}
            />
          </InputGroup>

          <InputGroup
            id="Common-Description"
            label="Description"
            errorMessage={formState.errors.description?.message}
          >
            <TextArea
              id="Common-Description"
              {...register('description', {
                required: REQUIRED_FIELD_MESSAGE,
              })}
            />
          </InputGroup>

          {template === 'basic' && (
            <>
              <InputGroup
                id="Basic-Badge"
                label="Badge"
                errorMessage={formState.errors.badge?.message}
              >
                <Input
                  id="Basic-Badge"
                  {...register('badge', {
                    required: REQUIRED_FIELD_MESSAGE,
                  })}
                />
              </InputGroup>
            </>
          )}

          {template === 'article' && (
            <>
              <InputGroup
                id="Article-AuthorName"
                label="Author Name"
                errorMessage={formState.errors.authorName?.message}
              >
                <Input
                  id="Article-AuthorName"
                  {...register('authorName', {
                    required: REQUIRED_FIELD_MESSAGE,
                  })}
                />
              </InputGroup>

              <InputGroup
                id="Article-AuthorAvatarUrl"
                label="Author Avatar URL"
                errorMessage={formState.errors.authorAvatarUrl?.message}
              >
                <Input
                  id="Article-AuthorAvatarUrl"
                  {...register('authorAvatarUrl', {
                    required: REQUIRED_FIELD_MESSAGE,
                  })}
                />
              </InputGroup>

              <InputGroup
                id="Article-Meta"
                label="Meta"
                errorMessage={formState.errors.meta?.message}
              >
                <Input
                  id="Article-Meta"
                  {...register('meta', {
                    required: REQUIRED_FIELD_MESSAGE,
                  })}
                />
              </InputGroup>
            </>
          )}
        </div>

        <div>
          <Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting
              ? 'Generating image...'
              : 'Generate image'}
          </Button>
        </div>
      </form>

      <div>
        <h2 className={styles.sectionHeading}>
          <span className={styles.dot}>3/4</span>
          <span>Request the image</span>
        </h2>

        <div className={styles.imageWrapper}>
          <h3 className={styles.imageHeading}>Preview</h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            className="rounded-lg"
            alt="Generated OG image preview"
          />
        </div>

        <h2 className={styles.sectionHeading}>
          <span className={styles.dot}>4/4</span>
          <span>Use it on your website</span>
        </h2>

        <div className={styles.block}>
          <div className={styles.header}>
            <h3 className={styles.blockHeading}>RAW URL</h3>
            <CopyButton value={previewUrl} />
          </div>
          <p className="break-all">{previewUrl}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.header}>
            <h3 className={styles.blockHeading}>NPM PACKAGE</h3>
            <CopyButton value={code} />
          </div>

          <pre className="whitespace-pre-wrap text-sm md:overflow-x-auto md:whitespace-pre">
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
};
