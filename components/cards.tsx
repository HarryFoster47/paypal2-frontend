import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { logout } from '../pages/util/api';
const Cards = () => {
    return (
        <div>
        <div className={styles.grid}>
        <Link href='/transfer'><div className={styles.card}>
          {/* Cards on the Homepage (links) */}
          <center><h2>Transfer &rarr;</h2></center>
        </div></Link>

        <Link href='/transfer'><div className={styles.card}>
        <center><h2>Withdraw +</h2></center>
        </div></Link>

        <Link href='/exchange'><div className={styles.card}>
          <center><h2>Deposit &darr;</h2></center>
        </div></Link>

        <Link href='/history'><div className={styles.card}>
          <center><h2>History •</h2></center>
        </div></Link>

        <Link href='/contacts'><div className={styles.card}>
          <center><h2>Contacts &#x25CA;</h2></center>
        </div></Link>

        <Link href='/login'><div className={styles.card}>
          <center><h2>Login &#x25AA;</h2></center>
        </div></Link>

      </div>

      <br/><br/>
        <center><button onClick={function(e) {
                e.preventDefault() 
              const error = logout()
              console.log (error)
            }} className={styles.signinbutton} type="submit">Logout</button></center>

      </div>
    );
}

export default Cards;