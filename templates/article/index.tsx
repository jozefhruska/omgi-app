import ReactDOMServer from 'react-dom/server';
import { NextApiRequest } from 'next';
import { z } from 'zod';
import { withTemplateWrapper } from '../index';
import { ArticleTemplate } from './ArticleTemplate';
import { articleTemplateStyles } from './styles';

export const articleTemplateValidationSchema = z.object({
  heading: z.string(),
  description: z.string(),
  authorName: z.string(),
  authorAvatarUrl: z.string().url(),
  meta: z.string(),
});

export type ArticleTemplateParams = z.infer<
  typeof articleTemplateValidationSchema
>;

export const parseArticleTemplateParams = (
  query: NextApiRequest['query']
): ArticleTemplateParams => {
  // Validate query parameters against the schema
  return articleTemplateValidationSchema.parse(query);
};

export const getArticleTemplateHtml = (query: NextApiRequest['query']) => {
  return withTemplateWrapper({
    template: ReactDOMServer.renderToString(
      <ArticleTemplate {...parseArticleTemplateParams(query)} />
    ),
    styles: articleTemplateStyles,
  });
};
