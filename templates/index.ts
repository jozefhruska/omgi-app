export enum TemplateKey {
  Article = 'article',
}

type WithTemplateWrapperProps = {
  template: string;
  styles: string;
};

export const withTemplateWrapper = ({
  template,
  styles,
}: WithTemplateWrapperProps): string => `
  <!DOCTYPE html>
  <html>
      <head>
      <meta charset="utf-8" />
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${styles}
    </head>

    <body>
      ${template}
    </body>
  </html>
`;
