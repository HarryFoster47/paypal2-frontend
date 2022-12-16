import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Cards = () => {
    return (
      
        <div className={styles.grid}>
        <div className={styles.card}>
          {/* Cards on the Homepage (links) */}
          <center><Link href='/transfer'><h2>Transfer &rarr;</h2></Link></center>
        </div>

        <div className={styles.card}>
        <center><Link href='/exchange'><h2>Withdraw +</h2></Link></center>
        </div>

        <div className={styles.card}>
          <center><Link href='/exchange'><h2>Deposit &darr;</h2></Link></center>
        </div>

        <div className={styles.card}>
          <center><Link href='/'><h2>History •</h2></Link></center>
        </div>
      </div>

    );
}

export default Cards;