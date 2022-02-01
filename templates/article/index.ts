import { NextApiRequest } from 'next/dist/shared/lib/utils';
import { z } from 'zod';

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
  const { heading, description, authorAvatarUrl, authorName, meta } =
    parseArticleTemplateParams(query);

  return `
    <!DOCTYPE html>
    <html>
      <meta charset="utf-8" />
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      <style>
        /* lato-regular - latin */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          src: local(''), url('/fonts/lato-v22-latin-regular.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('/fonts/lato-v22-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        /* lato-900 - latin */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 900;
          src: local(''), url('/fonts/lato-v22-latin-900.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('/fonts/lato-v22-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
    
        html,
        body {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 2rem;
          margin: 0;
          font-family: 'Lato', sans-serif;
        }
    
        h1 {
          margin: 0 0 2rem;
          font-size: 52pt;
          font-weight: 900;
          color: #1e293b;
        }
    
        p {
          margin: 0 0 2rem;
          font-size: 24pt;
          color: #475569;
          line-height: 1.6;
        }
    
        .metaWrapper {
          display: flex;
          align-items: center;
          justify-content: left;
        }
    
        .authorWrapper {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem;
          border-radius: 2rem;
          background-color: #1e293b;
        }
    
        .authorName {
          color: #ffffff;
          font-size: 20pt;
          margin-left: 1rem;
          margin-right: 1rem;
        }
    
        .authorImage {
          width: 3rem;
          height: 3rem;
          border-radius: 100%;
        }
    
        .meta {
          font-size: 20pt;
          color: #475569;
          margin-left: 1.4rem;
        }
    
        .line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1rem;
          width: 100%;
          background: rgb(14, 165, 233);
          background: linear-gradient(
            90deg,
            rgba(14, 165, 233, 1) 0%,
            rgba(99, 102, 241, 1) 50%,
            rgba(139, 92, 246, 1) 100%
          );
        }
      </style>
    
      <body>
        <h1>${heading}</h1>
        <p>${description}</p>
        <div class="metaWrapper">
          <div class="authorWrapper">
            <img
              src="${authorAvatarUrl}"
              class="authorImage"
              alt="author image"
            />
            <span class="authorName">${authorName}</span>
          </div>
          <div class="meta">${meta}</div>
        </div>
        <div class="line" />
      </body>
    </html>
  `;
};
