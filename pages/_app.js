import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';

import Head from 'next/head';
import theme from '../styles/theme';
import { css, Global } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <div>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ParallaxProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
