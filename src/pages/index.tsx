import Header from '@/components/header/header';
import { motion } from 'framer-motion';
import { Wrapper } from '@/styles/pages/homepage.styles';

const MotionWrapper = motion(Wrapper);

export default function Home() {
  return (
    <>
      <Header
        title="Hi, I'm Jakub "
        description="Frontend Developer"
        firstButton="Download my CV"
        firstButtonHref="https://drive.google.com/file/d/1X1U-XW9mIOJ3B3jUPhQrzKB6FKEXApam/view?usp=sharing"
        secondButton="Let's talk"
        secondButtonHref="/contact"
      />
      <MotionWrapper
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.4, delay: 1.2, ease: 'easeInOut' }}
        exit={{ opacity: '0%' }}
      >
        <h1>Jaycode</h1>
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
