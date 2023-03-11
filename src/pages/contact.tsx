import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import { Wrapper } from '@/styles/pages/contact.styles';

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
        <h1>Contact</h1>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio, id, incidunt
          excepturi quibusdam aliquam eos, nobis nulla eaque sunt pariatur ad commodi hic iure
          soluta fugiat deserunt? Repellendus, quo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde officia nam totam magnam. Cum saepe, deserunt velit quisquam
          veritatis ipsam dolorem voluptatibus at laudantium maiores animi rem nobis aspernatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab veritatis, cupiditate
          debitis laudantium eos magnam, totam aperiam quis et officiis! Rem corporis in id! Beatae
          quis corrupti soluta assumenda!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio, id, incidunt
          excepturi quibusdam aliquam eos, nobis nulla eaque sunt pariatur ad commodi hic iure
          soluta fugiat deserunt? Repellendus, quo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde officia nam totam magnam. Cum saepe, deserunt velit quisquam
          veritatis ipsam dolorem voluptatibus at laudantium maiores animi rem nobis aspernatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab veritatis, cupiditate
          debitis laudantium eos magnam, totam aperiam quis et officiis! Rem corporis in id! Beatae
          quis corrupti soluta assumenda!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio, id, incidunt
          excepturi quibusdam aliquam eos, nobis nulla eaque sunt pariatur ad commodi hic iure
          soluta fugiat deserunt? Repellendus, quo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde officia nam totam magnam. Cum saepe, deserunt velit quisquam
          veritatis ipsam dolorem voluptatibus at laudantium maiores animi rem nobis aspernatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab veritatis, cupiditate
          debitis laudantium eos magnam, totam aperiam quis et officiis! Rem corporis in id! Beatae
          quis corrupti soluta assumenda!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio, id, incidunt
          excepturi quibusdam aliquam eos, nobis nulla eaque sunt pariatur ad commodi hic iure
          soluta fugiat deserunt? Repellendus, quo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde officia nam totam magnam. Cum saepe, deserunt velit quisquam
          veritatis ipsam dolorem voluptatibus at laudantium maiores animi rem nobis aspernatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab veritatis, cupiditate
          debitis laudantium eos magnam, totam aperiam quis et officiis! Rem corporis in id! Beatae
          quis corrupti soluta assumenda!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio, id, incidunt
          excepturi quibusdam aliquam eos, nobis nulla eaque sunt pariatur ad commodi hic iure
          soluta fugiat deserunt? Repellendus, quo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde officia nam totam magnam. Cum saepe, deserunt velit quisquam
          veritatis ipsam dolorem voluptatibus at laudantium maiores animi rem nobis aspernatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab veritatis, cupiditate
          debitis laudantium eos magnam, totam aperiam quis et officiis! Rem corporis in id! Beatae
          quis corrupti soluta assumenda!
        </p>
      </MotionWrapper>
    </>
  );
}
