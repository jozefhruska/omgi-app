import ReactDOMServer from 'react-dom/server';
import { NextApiRequest } from 'next';
import { z } from 'zod';
import { withTemplateWrapper } from '../index';
import { HireDevTemplate } from './HireDevTemplate';
import { hireDevTemplateStyles } from './styles';

export const hireDevTemplateValidationSchema = z.object({
  employmentType: z.string(),
  jobOpeningName: z.string(),
  organizationAvatarUrl: z.string(),
  organizationName: z.string(),
  presence: z.string(),
  salaryCurrency: z.string(),
  salaryEnd: z.string(),
  salaryStart: z.string(),
  salaryType: z.enum(['weekly', 'monthly', 'yearly']),
});

export type HireDevTemplateParams = z.infer<
  typeof hireDevTemplateValidationSchema
>;

export const parseBasicTemplateParams = (
  query: NextApiRequest['query']
): HireDevTemplateParams => {
  // Validate query parameters against the schema
  return hireDevTemplateValidationSchema.parse(query);
};

export const getHireDevTemplateHtml = (query: NextApiRequest['query']) => {
  return withTemplateWrapper({
    template: ReactDOMServer.renderToString(
      <HireDevTemplate {...parseBasicTemplateParams(query)} />
    ),
    styles: hireDevTemplateStyles,
  });
};
