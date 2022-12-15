import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (

    <div className={styles.navbar}>
        <Link className={styles.nav} href="/contacts">My Contacts</Link>
        <Link className={styles.nav} href="/"><img className={styles.navimg} src='https://i.imgur.com/LVYofOc.png'/></Link>
        <Link className={styles.nav} href="/login">Login/Register</Link>
    </div>

    );
}

export default Navbar;