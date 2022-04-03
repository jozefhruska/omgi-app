import { NextPage } from 'next';
import { HeroSection } from '../components/homepage/hero-section/HeroSection';
import { PreviewForm } from '../components/homepage/preview-form/PreviewForm';
import { Footer } from '../components/common/footer/Footer';

const Homepage: NextPage = () => (
  <>
    <main>
      <HeroSection />

      <div className="my-16 sm:my-24">
        <PreviewForm />
      </div>
    </main>

    <div className="mt-16 mb-8 sm:mt-24">
      <Footer />
    </div>
  </>
);

export default Homepage;
