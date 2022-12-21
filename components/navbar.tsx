import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (

    <div className={styles.navbar}>
        {/* Navigation Links */}
        <Link className={styles.nav} href="/"><img className={styles.navimg} src='https://i.imgur.com/GXrmJd2.png'/></Link>
    </div>

    );
}

export default Navbar;