import React from 'react';
import { Wrapper, SvgWrapper } from './animationSection.styles';
import Scene from '../../assets/icons/Scene.svg';

function AnimationSection() {
  const AnimationSectionItems = {
    title: 'The applications I create are easy to use and easy to develop.',
    description: `I have experience in writing applications in JavaScript ES6+ with use async and await. And experience with Git and GitHub`,
  };

  return (
    <Wrapper>
      <SvgWrapper>
        <Scene />
      </SvgWrapper>
      <div>
        <h1>{AnimationSectionItems.title}</h1>
        <p>{AnimationSectionItems.description}</p>
      </div>
    </Wrapper>
  );
}

export default AnimationSection;
