import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../src/components/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
         {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
            rel="stylesheet"
            href="/assets/Dongle-Regular.ttf"
          />
         {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            href="/assets/Dongle-Bold.ttf"
          />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
