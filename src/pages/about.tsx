import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header/header';
import {
  Wrapper,
  StyledSection,
  ImageWrapper,
  DescriptionWrapper,
  StyledImage,
  Title,
  Paragraph,
  StyledTechnologies,
  Technologie,
} from '@/styles/pages/about.styles';

const MotionWrapper = motion(Wrapper);

export default function About() {
  const AboutPageItems = {
    title: ['Hello!!! My name is Jakub', 'My Skills'],
    paragraph: [
      `
      I like to create things that live on the internet. 
      For several years I have been developing my skills in HTML, CSS, and JavaScript. 
      I will be a good member of the team because I learn quickly and work well in a team.
      `,
      `
      During my education I had the opportunity to create simple websites and large Full Stack applications. 
      I also had the opportunity to work on commercial projects, where I learned how to work with clients and select technologies for specific requirements. 
      I can create applications based on frameworks such as React and NEXT.JS. I have experience working with Git and GitHub.`,
    ],
    technologies: [
      'React',
      'JavaScript ES6+',
      'HTML 5',
      'CSS',
      'Git',
      'Tailwind CSS',
      'TypeSctipt',
      'Node.js',
      'GraphQL',
      'Webpack',
      'Docker',
    ],
    image: '/images/profile.jpeg',
    alt: 'Profile Image',
  };
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
            <Image src={AboutPageItems.image} alt={AboutPageItems.alt} width={500} height={450} />
          </ImageWrapper>
        </StyledSection>
      </MotionWrapper>
    </>
  );
}
