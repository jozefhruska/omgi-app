import { NextPage } from 'next';
import Head from 'next/head';
import { HeroSection } from '../components/homepage/hero-section/HeroSection';
import { PreviewForm } from '../components/homepage/preview-form/PreviewForm';
import { Footer } from '../components/common/footer/Footer';
import { getTemplateUrl } from 'omgi';
import Script from 'next/script';

const Homepage: NextPage = () => {
  const OGImageUrl = getTemplateUrl({
    template: 'basic',
    values: {
      heading: 'Oh My Graph Image ',
      description:
        'Generate custom Open Graph images in a matter of seconds. Choose the template you like and generate the OG image with a simple HTTP GET request.',
      badge: 'open graph image generator',
    },
  });

  return (
    <>
      <Head>
        <title>Effortless Open Graph image generator | OMGI</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="keywords"
          content="OMGI, Open Graph protocol, Open Graph image, OG image, generator, custom"
        />
        <meta
          name="description"
          content="Choose the template you like and generate the OG image with a simple HTTP GET request."
        />

        <meta
          property="og:title"
          content="OMGI: Generate custom Open Graph images in a matter of seconds"
        />
        <meta property="og:image" content={OGImageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="omgi.vercel.app" />
        <meta property="twitter:url" content="https://omgi.vercel.app/" />

        <meta
          name="twitter:title"
          content="OMGI: Generate custom Open Graph images in a matter of seconds"
        />
        <meta
          name="twitter:description"
          content="Choose the template you like and generate the OG image with a simple HTTP GET request."
        />
        <meta name="twitter:image" content={OGImageUrl} />

        <meta
          name="google-site-verification"
          content="1dFRF0vAiUVQtwOvBc8vVHoqsGR06wynmph-bKvmdnI"
        />
      </Head>

      <main>
        <HeroSection />

        <div className="my-16 sm:my-24">
          <PreviewForm />
        </div>
      </main>

      <div className="mt-16 mb-8 sm:mt-24">
        <Footer />
      </div>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
};

export default Homepage;
