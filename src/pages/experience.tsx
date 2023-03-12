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
    {
      type: 'commercial',
      name: 'Champion-Academy',
      href: 'https://championacademy.pl/',
      github: 'https://github.com/JayCodeGitHub/Final-Champion-Academy',
      description:
        'Champion Academy is a local sports club based in Oborniki. They asked me to create their website. Working with the client required me to customize the tools. The client required, that the site should be well positioned and that they should be able to change its content.',
      technologies: ['React', 'Gatsby', 'Dato CMS', 'tailwind css', 'GraphQL'],
      image: '/images/champion-academy.png',
      alt: 'Screenshot from Champion Academy desktop website',
    },
    {
      type: 'Non-commercial',
      name: 'Happy-Notes',
      href: 'https://happy-notes.pl/',
      github: 'https://github.com/JayCodeGitHub/Happy-Notes',
      description:
        'Happy Notes is MERN Stack application for creating notes in three different categories. The application has a login system, each user has their own notes. The notes are stored in a database and are uploaded via rest api.',
      technologies: [
        'React',
        'Redux',
        'tailwind css',
        'TypeScript',
        'Docker',
        'Rest API',
        'Express JS',
        'Mongo DB',
        'JWT',
      ],
      image: '/images/happy-notes.png',
      alt: 'Screenshot from Happy Notes desktop website',
    },
    {
      type: 'Non-commercial',
      name: 'Game-Catalog',
      href: 'https://game-catalog.pl/',
      github: 'https://github.com/JayCodeGitHub/Game-catalog',
      description:
        'An application with a game catalog where you can sort and search for games. Written without using framewoks or libraries. The javascript code thanks to the use of webpack is modular and more readable because each module is written in a separate file.',
      technologies: ['JavaScript', 'HTML', 'SASS', 'WebPack', 'npm-scripts'],
      image: '/images/game-catalog.png',
      alt: 'Screenshot from Game Catalog desktop website',
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
