import Image from 'next/image';
import { Wrapper } from './aboutSection.styles';
import { Button } from '../button/button.styles';

function AboutSection() {
  const AboutSectionItems = {
    title: `Hello, I'm Jakub passionate frontend developer located in Poland.`,
    description: `I'm focusing on developing my skills through ongoing projects. I'm interested in the front end and working on ambitious projects. I have experience in commercial projects and working with clients.`,
    href: '/about',
    alt: 'Profile Image',
    button: 'See More',
  };
  return (
    <>
      <Wrapper>
        <div>
          <h1>{AboutSectionItems.title}</h1>
          <p>{AboutSectionItems.description}</p>
          <a href={AboutSectionItems.href}>
            <Button>{AboutSectionItems.button}</Button>
          </a>
        </div>
        <Image src="/images/profile.jpeg" alt={AboutSectionItems.alt} width={500} height={500} />
      </Wrapper>
    </>
  );
}

export default AboutSection;
