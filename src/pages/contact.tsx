import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import {
  Wrapper,
  ContactWrapper,
  ContactItem,
  ContactItemsWrapper,
} from '@/styles/pages/contact.styles';

const MotionWrapper = motion(Wrapper);

export default function Contact() {
  return (
    <>
      <Header secondary title="contact" />
      <MotionWrapper
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        exit={{ opacity: '0%' }}
      >
        <ContactWrapper>
          <ContactItemsWrapper>
            <ContactItem
              href="https://www.linkedin.com/in/jakub-gryzi%C5%84ski-b00296264/"
              target="_blank"
            >
              <BsLinkedin />
              LinkedIn
            </ContactItem>
            <ContactItem href="mailto:jakub.gryzinski@gmail.com">
              <FiMail />
              Email
            </ContactItem>
            <ContactItem href="https://github.com/JayCodeGitHub" target="_blank">
              <BsGithub />
              GitHub
            </ContactItem>
          </ContactItemsWrapper>
        </ContactWrapper>
      </MotionWrapper>
    </>
  );
}
