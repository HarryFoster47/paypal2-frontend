import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageLayout from '../components/pagelayout'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Dashboard from '../components/dashboard'

export default function IndexPage() {
  return (
    <main className={styles.container}>
      {/* The Head */}
      <Head>
        <title>Sendo</title>
        <meta name="description" content="A simple way to pay" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      <PageLayout>
        {/* <div className={styles.mainHome}> */}
          <Dashboard/>
          {/* The User's Balance */}
          {/* <Balance/> */}
          {/* The Cards (transfer, etc) */}
          {/* <Cards/> */}
          {/* <div className = {styles.balanceSection}>section A</div>
          <div className = {styles.transactionSection}>section B</div>
          <div className = {styles.sendAgainSection}>section C</div>
          <div className = {styles.guideSection}>section D</div> */}
        {/* </div> */}
      </PageLayout>

      {/* The Footer */}
      {/* // <Footer/> */}
    </main>
  )
}
