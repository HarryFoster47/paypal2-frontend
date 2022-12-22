import styles from '../styles/Dashboard.module.css'
import Balance from './balance';
import Articles from './articles';

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <div className={styles.balanceContainer}>
            <Balance alone/>
            {/* <SendAgain /> */}
            {/* <Transactions /> */}
            {/* <Articles /> */}

              {/* <div className={styles.balanceContainer__left}>
                  <img className={styles.logo} src="/SendOIcon.png"/>
              </div>
            <div className={styles.balanceContainer__right}>
                <div className={styles.balance}>£<span>171.11</span></div>
            </div> */}
            
        </div>
        <Articles />
        {/* <div className={styles.sendContainer}>B</div>
        <div className={styles.historyContainer}>C</div>
        <div className={styles.articlesContainer}>D</div> */}
    </div>
  )
}

export default dashboard;