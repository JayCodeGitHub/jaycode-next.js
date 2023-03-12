import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header/header';
import {
  Wrapper,
  StyledSection,
  ImageWrapper,
  DescriptionWrapper,
  Title,
  Paragraph,
  StyledTechnologies,
  Technologie,
} from '@/styles/pages/about.styles';
import { AboutPageItems } from '@/assets/items/AboutPageItems';

const MotionWrapper = motion(Wrapper);

export default function About() {
  return (
    <>
      <Header secondary title="about" />
      <MotionWrapper
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        exit={{ opacity: '0%' }}
      >
        <StyledSection>
          <DescriptionWrapper>
            <Title>{AboutPageItems.title[0]}</Title>
            <Paragraph>{AboutPageItems.paragraph[0]}</Paragraph>
            <Paragraph>{AboutPageItems.paragraph[1]}</Paragraph>
            <Title>{AboutPageItems.title[1]}</Title>
            <StyledTechnologies>
              {AboutPageItems.technologies.map((item, i) => (
                <Technologie key={i}>{item}</Technologie>
              ))}
            </StyledTechnologies>
          </DescriptionWrapper>
          <ImageWrapper>
            <Image
              src={AboutPageItems.image}
              alt={AboutPageItems.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageWrapper>
        </StyledSection>
      </MotionWrapper>
    </>
  );
}
