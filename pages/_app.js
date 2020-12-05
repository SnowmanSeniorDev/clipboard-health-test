import '../styles/globals.css'
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head'
import { useStore } from '../store'
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        <title>Health Explore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
      </Head>

      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Fragment>
  )
}

export default MyApp