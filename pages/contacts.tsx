import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Contacts from '../components/contacts'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* The Head */}
      <Head>
        <title>Sendo</title>
        <meta name="description" content="A simple way to pay" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      {/* The Navigation Bar */}
        <Navbar/>

      {/* Contacts Box and Add Contact Box */}
      <main className={styles.main}>
        <Balance/>
        <Contacts/>

      </main>

      {/* The Page Footer */}
        <Footer/>

    </div>
  )
}
