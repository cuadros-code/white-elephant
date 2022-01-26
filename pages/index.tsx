import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Elefante blanco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/assets/Dongle-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/Dongle-Bold.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <main className={styles.main}>
        <h1>
          Ciudemos lo que es de nosotros, ayuda a construir un mejor país.
        </h1>
        <p>
          Elefante blanco es una plataforma que permite a los ciudadanos
          registrar actos de corrupción.
        </p>

      </main>
    </div>
  )
}

export default Home
