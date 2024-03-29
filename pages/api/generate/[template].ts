import type { NextApiHandler } from 'next';
import { ZodError } from 'zod';
import { getScreenshot } from '../../../helpers/images';
import { TemplateKey } from '../../../templates';
import { getArticleTemplateHtml } from '../../../templates/article';
import { getBasicTemplateHtml } from '../../../templates/basic';
import { getHireDevTemplateHtml } from '../../../templates/hire-dev';
import { getHireDevJobTemplateHtml } from '../../../templates/hire-dev-job';
import { getHireDevOrgTemplateHtml } from '../../../templates/hire-dev-org';

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

      case TemplateKey.Basic: {
        html = getBasicTemplateHtml(req.query);
        break;
      }

      case TemplateKey.HireDev: {
        html = getHireDevTemplateHtml(req.query);
        break;
      }

      case TemplateKey.HireDevJob: {
        html = getHireDevJobTemplateHtml(req.query);
        break;
      }

      case TemplateKey.HireDevOrg: {
        html = getHireDevOrgTemplateHtml(req.query);
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
