import core from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';
import { ParseRequestResult } from './http';

type GetHtmlTemplateProps = ParseRequestResult;

export const getHtmlTemplate = ({
  heading,
  description,
}: GetHtmlTemplateProps) => `
  <!DOCTYPE html>
  <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <style>
      /* lato-regular - latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local(''),
             url('/fonts/lato-v22-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/lato-v22-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* lato-900 - latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        src: local(''),
             url('/fonts/lato-v22-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
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
        margin: 0;
        font-size: 52pt;
        font-weight: 900;
        color: #1e293b;
      }
      
      p {
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
        font-size: 18pt;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      
      .authorImage {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
      }
      
      .date {
        font-size: 18pt;
        color: #475569;
        margin-left: 1rem;
      }
      
      .line {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1rem;
        width: 100%;
        background: rgb(14,165,233);
        background: linear-gradient(90deg, rgba(14,165,233,1) 0%, rgba(99,102,241,1) 50%, rgba(139,92,246,1) 100%);
      }
    </style>
    
    <body>
      <h1>${heading}</h1>
      <p>${description}</p>
      <div class="metaWrapper">
        <div class="authorWrapper">
          <img src="http://localhost:3000/avatar.jpg" class="authorImage" alt="author image" />
          <span class="authorName">Jozef Hruška</span>
        </div>
        <div class="date">Published on January 31, 2022.</div>
      </div>
      <div class="line" />
    </body>
  </html>
`;

let _page: core.Page | null;

const getPage = async (): Promise<core.Page> => {
  if (!!_page) {
    return _page;
  }

  const browser = await core.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  // const browser = await core.launch({
  //   args: [],
  //   executablePath:
  //     '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  //   headless: true,
  // });

  return await browser.newPage();
};

export const getScreenshot = async (html: string) => {
  const page = await getPage();

  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // Wait until all images and fonts have loaded
  // Source: https://github.blog/2021-06-22-framework-building-open-graph-images/
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
        // Image hasn't loaded yet, added an event listener to know when it does
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      }),
    ]);
  });

  return await page.screenshot({ type: 'png', fullPage: false });
};
