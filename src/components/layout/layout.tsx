import Head from 'next/head';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Navbar from '../navbar/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>JayCode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
