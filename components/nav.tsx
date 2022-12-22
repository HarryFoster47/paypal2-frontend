import styles from '../styles/Menu.module.css'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai'
import {VscHistory} from 'react-icons/vsc'
import {HiArrowsUpDown} from 'react-icons/hi2'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.iconsContainer}>
            <Link href='/'><div className={styles.icon}><AiFillHome /></div></Link>
            <Link href='/contacts'><div className={styles.icon}><BsFillPersonLinesFill /></div></Link>
            <Link href='/transfer'><div className={styles.icon}><HiArrowsUpDown/></div></Link>
            <Link href='/history'><div className={styles.icon}><VscHistory /></div></Link>
        </div>
    </div>
  )
}

export default Nav