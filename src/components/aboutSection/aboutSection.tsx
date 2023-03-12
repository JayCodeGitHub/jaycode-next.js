import Image from 'next/image';
import { Wrapper, ImageWrapper } from './aboutSection.styles';
import { Button } from '../button/button.styles';
import { AboutSectionItems } from '@/assets/items/AboutSectionItems';

function AboutSection() {
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
        <ImageWrapper>
          <Image
            src={AboutSectionItems.image}
            alt={AboutSectionItems.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageWrapper>
      </Wrapper>
    </>
  );
}

export default AboutSection;
