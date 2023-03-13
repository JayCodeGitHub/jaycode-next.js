import React from 'react';
import { Wrapper, SvgWrapper } from './animationSection.styles';
import Scene from '../../assets/icons/Scene.svg';
import { AnimationSectionItems } from '@/assets/items/AnimationSectionItems';

function AnimationSection() {
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
