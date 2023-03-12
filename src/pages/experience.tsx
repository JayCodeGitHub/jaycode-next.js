import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import { Wrapper } from '@/styles/pages/experience.styles';
import ProjectSection from '@/components/projectSection/projectSection';
import { ProjectsItems } from '@/assets/items/ProjectsItems';

const MotionWrapper = motion(Wrapper);

export default function Experience() {
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
