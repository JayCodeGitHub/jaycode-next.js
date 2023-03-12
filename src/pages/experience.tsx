import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import { Wrapper } from '@/styles/pages/experience.styles';
import ProjectSection from '@/components/projectSection/projectSection';

const MotionWrapper = motion(Wrapper);

export default function Experience() {
  const ProjectsItems = [
    {
      type: 'commercial',
      name: 'Karate-Team',
      href: 'https://karate-team.netlify.app/',
      github: 'https://github.com/JayCodeGitHub/karate-team.pl',
      description: `Still in progress refreshed website of Karate Team Oborniki. Technologies used in the project were selected for the client's needs. So I used Server Site Rendering to speed up loading times. For animation I used GSAP and ScrollTrigger. The data is downloaded from Dato CMS from where the client can manage the content of the site.`,
      technologies: ['React', 'Gatsby', 'Dato CMS', 'styled-components', 'GraphQL'],
      image: '/images/karate-team.png',
      alt: 'Screenshot from Karate Team desktop website',
    },
  ];
  return (
    <>
      <Header secondary title="experience" />
      <MotionWrapper
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        exit={{ opacity: '0%' }}
      >
        {ProjectsItems.map((item, i) => (
          <ProjectSection
            key={i}
            i={i}
            src={item.image}
            alt={item.alt}
            type={item.type}
            name={item.name}
            description={item.description}
            technologies={item.technologies}
            href={item.href}
            github={item.github}
          />
        ))}
      </MotionWrapper>
    </>
  );
}
