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
        <link rel='manifest' href='/manifest.json' />
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
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
