import ReactDOMServer from 'react-dom/server';
import { NextApiRequest } from 'next';
import { z } from 'zod';
import { withTemplateWrapper } from '../index';
import { BasicTemplate } from './BasicTemplate';
import { basicTemplateStyles } from './styles';

export const basicTemplateValidationSchema = z.object({
  heading: z.string(),
  description: z.string(),
  badge: z.string(),
});

export type BasicTemplateParams = z.infer<
  typeof basicTemplateValidationSchema
>;

export const parseBasicTemplateParams = (
  query: NextApiRequest['query']
): BasicTemplateParams => {
  // Validate query parameters against the schema
  return basicTemplateValidationSchema.parse(query);
};

export const getBasicTemplateHtml = (query: NextApiRequest['query']) => {
  return withTemplateWrapper({
    template: ReactDOMServer.renderToString(
      <BasicTemplate {...parseBasicTemplateParams(query)} />
    ),
    styles: basicTemplateStyles,
  });
};
