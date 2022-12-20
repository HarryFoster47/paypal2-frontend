import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
         
        <footer className={styles.footer}>
         
            <p>Made by Leon, Ben, Rash and Harry</p>
            <div><button className={styles.signinbutton} type="submit">Logout</button></div>
     
        </footer>

    );
}

export default Footer;