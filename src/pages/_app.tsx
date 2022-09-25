import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { client } from '../lib/apollo';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
