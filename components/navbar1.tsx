import styles from '../styles/Menu.module.css'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai'
import {VscHistory} from 'react-icons/vsc'
import {HiArrowsUpDown} from 'react-icons/hi2'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.iconsContainer}>
            <div className={styles.icon}><AiFillHome /></div>
            <div className={styles.icon}><BsFillPersonLinesFill /></div>
            <div className={styles.icon}><HiArrowsUpDown/></div>
            <div className={styles.icon}><VscHistory /></div>
        </div>
    </div>
  )
}

export default Menu


