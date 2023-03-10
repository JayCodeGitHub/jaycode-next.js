import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import Footer from '../footer/footer';

import Background from '../background/background';

const Navbar = dynamic(() => import('../navbar/navbar'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>JayCode</title>
        <meta
          name="description"
          content="Hello!!! My name is Jakub I like to create things that live on the internet. 
      For several years I have been developing my skills in HTML, CSS, and JavaScript. 
      I will be a good member of the team because I learn quickly and work well in a team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile.jpeg" />
      </Head>
      <GlobalStyle />
      <Background />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
