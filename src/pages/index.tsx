import Header from '@/components/header/header';
import AboutSection from '@/components/aboutSection/aboutSection';
import { motion } from 'framer-motion';
import { Wrapper } from '../styles/pages/homepage.styles';

const MotionWrapper = motion(Wrapper);

export default function Home() {
  return (
    <>
      <Header
        title="Hi, I'm Jakub "
        description="Frontend Developer"
        firstButton="Download my CV"
        firstButtonHref="https://drive.google.com/file/d/1X1U-XW9mIOJ3B3jUPhQrzKB6FKEXApam/view?usp=sharing"
        secondButton="Let's talk"
        secondButtonHref="/contact"
      />
      <MotionWrapper
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.4, delay: 1.2, ease: 'easeInOut' }}
        exit={{ opacity: '0%' }}
      >
        <AboutSection />
      </MotionWrapper>
    </>
  );
}
