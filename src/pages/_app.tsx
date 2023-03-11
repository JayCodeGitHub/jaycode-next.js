import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode={'wait'}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
