import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/_layout/Layout';
import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyles />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
