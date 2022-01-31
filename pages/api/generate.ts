import type { NextApiHandler } from 'next';
import { parseRequest } from '../../helpers/http';
import { getHtmlTemplate, getScreenshot } from '../../helpers/images';

type Data =
  | {
      text: string;
    }
  | {
      message: string;
    };

const GenerateApiHandler: NextApiHandler<Data> = async (req, res) => {
  try {
    const { heading, description } = parseRequest(req);

    const html = getHtmlTemplate({ heading, description });
    const screenshot = await getScreenshot(html);

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(screenshot);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    } else {
      res.status(500).json({ message: 'Unknown error.' });
    }
  }
};

export default GenerateApiHandler;
