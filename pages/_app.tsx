import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../src/components/index'
import { useMessageError } from '../src/store/messageStore';
import { MessageAlert } from 'src/components/index';

function MyApp({ Component, pageProps }: AppProps) {

  const { error, messageError, type } = useMessageError( state => state )

  return (
    <>
     <Head>
        <link
            rel="preload"
            href="/assets/Dongle-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/Dongle-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/Dongle-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
      </Head>
      { error && <MessageAlert type={type} message={messageError} /> }
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
