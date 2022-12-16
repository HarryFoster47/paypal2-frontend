import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* The Head */}
      <Head>
        <title>Paypal 2.0</title>
        <meta name="description" content="A simple way to pay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* The Navigation Bar */}
        <Navbar/>

      <main className={styles.main}>
      </main>

      {/* The Footer */}
        <Footer/>

    </div>
  )
}
