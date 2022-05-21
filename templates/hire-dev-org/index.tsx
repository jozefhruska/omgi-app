import ReactDOMServer from 'react-dom/server';
import { NextApiRequest } from 'next';
import { z } from 'zod';
import { withTemplateWrapper } from '../index';
import { HireDevOrgTemplate } from './HireDevOrgTemplate';
import { hireDevOrgTemplateStyles } from './styles';

export const hireDevOrgTemplateValidationSchema = z.object({
  organizationAvatarUrl: z.string(),
  organizationName: z.string(),
  location: z.string().optional(),
  activePositionsCount: z.string().optional(),
});

export type HireDevOrgTemplateParams = z.infer<
  typeof hireDevOrgTemplateValidationSchema
>;

export const parseBasicTemplateParams = (
  query: NextApiRequest['query']
): HireDevOrgTemplateParams => {
  // Validate query parameters against the schema
  return hireDevOrgTemplateValidationSchema.parse(query);
};

export const getHireDevOrgTemplateHtml = (
  query: NextApiRequest['query']
) => {
  return withTemplateWrapper({
    template: ReactDOMServer.renderToString(
      <HireDevOrgTemplate {...parseBasicTemplateParams(query)} />
    ),
    styles: hireDevOrgTemplateStyles,
  });
};
