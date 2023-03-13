import { useRef, useEffect } from 'react';
import Scene from './scene';
import { Wrapper, SvgWrapper } from './animationSection.styles';
import { AnimationSectionItems } from '@/assets/items/AnimationSectionItems';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimationSection() {
  const wrapper = useRef<any>(null);
  useEffect(() => {
    if (wrapper.current) {
      const [elements] = wrapper.current.children;

      const background = elements.getElementById('background');
      const desktop = elements.getElementById('desktop');
      const laptop = elements.getElementById('laptop');
      const cup = elements.getElementById('cup');
      const character = elements.getElementById('character');

      gsap.set([background, desktop, laptop, cup, character], {
        autoAlpha: 0,
      });

      gsap.fromTo(
        background,
        {},
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: wrapper.current,
            start: '20% 50%',
          },
        },
      );
      gsap.fromTo(
        desktop,
        { y: '-=100' },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: wrapper.current,
            start: '20% 50%',
          },
        },
      );
      gsap.fromTo(
        laptop,
        { y: '-=100' },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: wrapper.current,
            start: '20% 50%',
          },
        },
      );
      gsap.fromTo(
        cup,
        { x: '+=100' },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 1.5,
          scrollTrigger: {
            trigger: wrapper.current,
            start: '20% 50%',
          },
        },
      );
      gsap.fromTo(
        character,
        {},
        {
          autoAlpha: 1,
          duration: 1,
          delay: 2,
          scrollTrigger: {
            trigger: wrapper.current,
            start: '20% 50%',
          },
        },
      );
    }
  });
  return (
    <Wrapper>
      <SvgWrapper ref={wrapper}>
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
