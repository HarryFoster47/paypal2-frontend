import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageLayout from '../components/pagelayout'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Contacts from '../components/contacts'

export default function ContactsPage() {
  return (
    <div className={styles.container}>
      {/* The Head */}
      <Head>
        <title>Sendo</title>
        <meta name="description" content="A simple way to pay" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      <PageLayout>
        {/* <main className={styles.main}> */}
          <Balance/>
          <Contacts/>
        {/* </main> */}
      </PageLayout>

    </div>
  )
}
