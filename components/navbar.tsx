import Link from 'next/link'
import {useState} from 'react';
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { RiAccountCircleLine } from 'react-icons/Ri'

const Navbar = (props: {loggedIn: boolean}) => {
    const [show, setShow] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.headerBar}>
                <Link className={styles.logoLink} href="/">
                    <img src="/SendOLogo.png" />
                </Link>
                {props.loggedIn && <div className={styles.profileBar}>
                    <div className={styles.profileIcon} onClick={() => setShow(!show)}><RiAccountCircleLine /></div>
                    <h2 className={styles.desktopUsername}>Esgrid</h2>
                </div>}
            </div>
            {show && (
                <div className={styles.profileMenu}>
                    <h2 className={styles.mobileUsername}>Esgrid</h2>
                    <div className={styles.itemContainer}>
                        <div className={styles.profileMenu__Item}>Profile</div>
                        <div className={styles.profileMenu__Item}>Settings</div>
                        <div className={styles.profileMenu__Item}>Logout</div>
                    </div>
                </div>
            )}
        </header>
    );
        //Account Nav Bar IMG (React icons)
    
}

export default Navbar;