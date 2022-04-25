import { PreviewFormData } from '../components/homepage/preview-form/PreviewForm';

export const getCode = ({
  template,
  ...formData
}: PreviewFormData) => `import { getTemplateUrl } from 'omgi';

getTemplateUrl({
  template: '${template}',
  values: {
    ${Object.entries(formData)
      .map(([key, value]) => {
        return `${key}: '${value.replace("'", "\\'")}'`;
      })
      .join(',\n    ')}
  },
});`;
