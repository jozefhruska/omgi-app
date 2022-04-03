import { NextPage } from 'next';
import { HeroSection } from '../components/homepage/hero-section/HeroSection';
import { PreviewForm } from '../components/homepage/preview-form/PreviewForm';

const Homepage: NextPage = () => {
  return (
    <main>
      <HeroSection />

      <div className="my-16 sm:my-24">
        <PreviewForm />
      </div>
    </main>
  );
};

export default Homepage;
