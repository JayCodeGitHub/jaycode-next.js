import React from 'react';
import Image from 'next/image';
import {
  Wrapper,
  Header,
  ProjectsWrapper,
  Project,
  IconsWrapper,
  ImageWrapper,
} from './projectsSlider.styles';
import ArrowButton from '../arrowButton/arrowButton';
import { ProjectsSliderItems } from '@/assets/items/ProjectsSliderItems';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';

const ProjectsSlider = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Some of my projects</h1>
        <ArrowButton to="/experience">See More</ArrowButton>
      </Header>
      <ProjectsWrapper>
        {ProjectsSliderItems.map((item, i) => (
          <Project key={i}>
            <ImageWrapper>
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrapper>
            <h2>{item.name}</h2>
            <IconsWrapper>
              <a target="_blank" aria-label="GitHub Source" href={item.github}>
                <GitHubIcon />
              </a>
              <a target="_blank" aria-label="Link to website" href={item.href}>
                <LinkIcon />
              </a>
            </IconsWrapper>
          </Project>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectsSlider;
