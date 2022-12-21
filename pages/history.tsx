import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Login from '../components/login'
import History from '../components/history'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* The Head */}
      <Head>
        <title>Paypal 2.0</title>
        <meta name="description" content="A simple way to pay" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      {/* The Navigation Bar */}
        <Navbar/>
        <Balance/>


      <main className={styles.main}>
        {/* Login Form */}
      <History/>

      </main>

      {/* The Footer */}
        <Footer/>

    </div>
  )
}