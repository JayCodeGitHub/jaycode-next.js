import { Wrapper } from './header.styles';
import { Button } from '../button/button.styles';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface HeaderProps {
  secondary?: boolean;
  title: string;
  description?: string;
  firstButton?: string;
  firstButtonHref?: string;
  secondButton?: string;
  secondButtonHref?: string;
}

export default function Header({
  secondary,
  title,
  description,
  firstButton,
  firstButtonHref,
  secondButton,
  secondButtonHref,
}: HeaderProps) {
  return (
    <Wrapper secondary={secondary}>
      {!secondary ? (
        <>
          <span>
            <motion.h1
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              exit={{ x: '-100%' }}
            >
              {title}
            </motion.h1>
          </span>
          <span>
            <motion.p
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
              exit={{ x: '-100%' }}
            >
              {description}
            </motion.p>
          </span>
          <span>
            <motion.span
              initial={{ opacity: '0%' }}
              animate={{ opacity: '100%' }}
              transition={{ delay: 0.8, duration: 0.4, ease: 'easeInOut' }}
              exit={{ opacity: '0%' }}
            >
              <a href={firstButtonHref} target="_blank">
                <Button>{firstButton}</Button>
              </a>
            </motion.span>
            <motion.span
              initial={{ opacity: '0%' }}
              animate={{ opacity: '100%' }}
              transition={{ delay: 1.2, duration: 0.4, ease: 'easeInOut' }}
              exit={{ opacity: '0%' }}
            >
              <Link href={secondButtonHref ? secondButtonHref : ''}>
                <Button>{secondButton}</Button>
              </Link>
            </motion.span>
          </span>
        </>
      ) : (
        <motion.h1
          initial={{ y: '-100%', opacity: '0%' }}
          animate={{ y: '0%', opacity: '100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          exit={{ y: '-100%', opacity: '0%' }}
        >
          {title}
        </motion.h1>
      )}
    </Wrapper>
  );
}
