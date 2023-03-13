import { useRef } from 'react';
import { Wrapper, SvgWrapper } from './animationSection.styles';
import Scene from '../../assets/icons/Scene.svg';
import { AnimationSectionItems } from '@/assets/items/AnimationSectionItems';
import { motion, Variants } from 'framer-motion';

const MotionSvgWrapper = motion(SvgWrapper);
const MotionWrapper = motion(Wrapper);

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

function AnimationSection() {
  return (
    <MotionWrapper initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 1 }}>
      <MotionSvgWrapper variants={cardVariants}>
        <Scene />
      </MotionSvgWrapper>
      <div>
        <h1>{AnimationSectionItems.title}</h1>
        <p>{AnimationSectionItems.description}</p>
      </div>
    </MotionWrapper>
  );
}

export default AnimationSection;
