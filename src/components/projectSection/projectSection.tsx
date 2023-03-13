import React from 'react';
import Image from 'next/image';
import { Wrapper, ImageWrapper, ContentWrapper, IconsWrapper } from './projectSection.styles';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';

export interface ProjectSectionProps {
  i: number;
  src: string;
  alt: string;
  type: string;
  name: string;
  description: string;
  technologies: Array<string>;
  href: string;
  github: string;
}

const ProjectSection = ({
  i,
  src,
  alt,
  type,
  name,
  description,
  technologies,
  href,
  github,
}: ProjectSectionProps) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper order={i}>
          <Image src={src} alt={alt} layout="fill" objectPosition="center" />
        </ImageWrapper>
        <ContentWrapper order={i}>
          <p>{type}</p>
          <h2>{name}</h2>
          <div>
            <p>{description}</p>
          </div>
          <ul>
            {technologies.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <IconsWrapper>
            <a target="_blank" aria-label="GitHub Source" href={github}>
              <GitHubIcon />
            </a>
            <a target="_blank" aria-label="Link to website" href={href}>
              <LinkIcon />
            </a>
          </IconsWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectSection;
