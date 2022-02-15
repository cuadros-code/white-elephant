import { ReactElement } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '../src/components/index'
import { useMessageError } from '../src/store/messageStore';
import { MessageAlert } from 'src/components/index';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement ) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const { error, messageError, type } = useMessageError( state => state )

  const getLayout = Component.getLayout ?? ((page) => page)

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
        { getLayout(<Component {...pageProps} />) }
      </Layout>
    </>
  ) 
}

export default MyApp
