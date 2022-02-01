import {
  ArticleTemplateParams,
  parseArticleTemplateParams,
} from './article/article';
import { NextApiRequest } from 'next';

export enum TemplateKey {
  Article = 'article',
}

export type TemplateParams = ArticleTemplateParams;

export type TemplateParamsParseFunction = (
  query: NextApiRequest['query']
) => TemplateParams;

export const templateParamsParseFunctionMap: Record<
  TemplateKey,
  TemplateParamsParseFunction
> = {
  [TemplateKey.Article]: parseArticleTemplateParams,
};
