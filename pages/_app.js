import React from 'react';
import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import customTheme from '@/styles/theme';

const theme = extendTheme({ customTheme });

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
