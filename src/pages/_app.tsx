import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/_layout/Layout';

import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
