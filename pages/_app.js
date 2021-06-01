import '../styles/globals.css'
import Layout from '../components/Layout'

import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import React from 'react';


export default function MyApp( props ) {
  const { Component, pageProps } = props;

   React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
   
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};