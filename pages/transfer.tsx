import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Transfer.module.css'
import Link from 'next/link'
import PageLayout from '../components/pagelayout'
import Balance from '../components/balance'
import Footer from '../components/footer'
import Cards from '../components/cards'
import Sendmoney from '../components/sendmoney'
import Nav from '../components/nav'


export default function TransferPage() {  
  return (
		<div className={styles.container}>
		{/* The Head */}
		<Head>
			<title>Sendo</title>
			<meta name="description" content="A simple way to pay" />
			<link rel="icon" href="/favico.ico" />
		</Head>
		<PageLayout>
			<main className={styles.layout}>
				<div className={styles.balanceWrapper}>
					<Balance/> 
				</div>
				<Sendmoney/>
			</main>
		</PageLayout>
		</div>
  )
}
