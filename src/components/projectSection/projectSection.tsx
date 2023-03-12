import React from 'react';
import Image from 'next/image';
import { Wrapper, ImageWrapper, ContentWrapper, IconsWrapper } from './projectSection.styles';

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
              </svg>
            </a>
            <a target="_blank" aria-label="Link to website" href={href}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="#ffffff"
                stroke="#ffffff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g fill="none">
                  <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                </g>
              </svg>
            </a>
          </IconsWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectSection;
