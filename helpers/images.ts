import core from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

let _page: core.Page | null;

const getPage = async (): Promise<core.Page> => {
  if (!!_page) {
    return _page;
  }

  const options =
    process.env.VERCEL_ENV === 'development'
      ? {
          args: [],
          executablePath:
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          headless: true,
        }
      : {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        };

  const browser = await core.launch(options);

  return await browser.newPage();
};

export const getScreenshot = async (html: string) => {
  const page = await getPage();

  await page.setViewport({ width: 1200, height: 630 });

  // Set the content to our rendered HTML
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // Wait until all images and fonts have loaded
  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll('img'));
    await Promise.all([
      document.fonts.ready,
      ...selectors.map((img) => {
        // Image has already finished loading, let’s see if it worked
        if (img.complete) {
          // Image loaded and has presence
          if (img.naturalHeight !== 0) return;
          // Image failed, so it has no height
          throw new Error('Image failed to load');
        }
        // Image hasn’t loaded yet, added an event listener to know when it does
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      }),
    ]);
  });

  return await page.screenshot({
    type: 'jpeg',
    fullPage: false,
    quality: 100,
  });
};
