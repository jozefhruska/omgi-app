import ReactDOMServer from 'react-dom/server';
import { NextApiRequest } from 'next';
import { z } from 'zod';
import { withTemplateWrapper } from '../index';
import { HireDevJobTemplate } from './HireDevJobTemplate';
import { hireDevJobTemplateStyles } from './styles';

export const hireDevJobTemplateValidationSchema = z.object({
  employmentType: z.string().optional(),
  jobOpeningName: z.string(),
  organizationAvatarUrl: z.string(),
  organizationName: z.string(),
  presence: z.string().optional(),
  salaryCurrency: z.string().optional(),
  salaryEnd: z.string().optional(),
  salaryStart: z.string().optional(),
  salaryPeriod: z
    .enum(['hour', 'week', 'month', 'year', 'piecework'])
    .optional(),
});

export type HireDevJobTemplateParams = z.infer<
  typeof hireDevJobTemplateValidationSchema
>;

export const parseHireDevJobTemplateParams = (
  query: NextApiRequest['query']
): HireDevJobTemplateParams => {
  // Validate query parameters against the schema
  return hireDevJobTemplateValidationSchema.parse(query);
};

export const getHireDevJobTemplateHtml = (
  query: NextApiRequest['query']
) => {
  return withTemplateWrapper({
    template: ReactDOMServer.renderToString(
      <HireDevJobTemplate {...parseHireDevJobTemplateParams(query)} />
    ),
    styles: hireDevJobTemplateStyles,
  });
};
