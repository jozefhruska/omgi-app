import type { NextApiHandler } from 'next';
import { getScreenshot } from '../../../helpers/images';
import { ZodError } from 'zod';
import { TemplateKey } from '../../../templates';
import { getArticleTemplateHtml } from '../../../templates/article/article';

const GenerateApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (typeof req.query.template !== 'string') {
      // noinspection ExceptionCaughtLocallyJS
      throw new Error('Query parameter "template" has to be a string.');
    }

    let html: string;
    switch (req.query.template) {
      case TemplateKey.Article: {
        html = getArticleTemplateHtml(req.query);
        break;
      }

      default: {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error(
          'Query parameter "template" refers to an unknown template.'
        );
      }
    }

    const screenshot = await getScreenshot(html);

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/jpeg`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(screenshot);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    } else if (e instanceof ZodError) {
      res.status(500).json({ message: e.message });
    } else {
      res.status(500).json({ message: 'Unknown error.' });
    }
  }
};

export default GenerateApiHandler;
