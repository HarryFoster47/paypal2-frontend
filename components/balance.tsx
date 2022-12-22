import Link from 'next/link'
import styles from '../styles/Balance.module.css'
import { useState, useEffect } from 'react';
import { getbalance } from '../pages/util/api';

const Balance = (props: {alone?: boolean}) => {
    const [balance, setbalance] = useState(0)
    useEffect(() => {
        getbalance().then(data => {
            console.log(data)
            // setbalance(data)
        })
    }, [balance])
    return (
        <section className={props.alone ? styles.balanceSectionAlone : styles.balanceSectionFit}>
            <img src="/SendOIcon.png" />
            <div className={styles.balanceInfo}>
                <h2>{new Intl.NumberFormat("en-gb", {
                    style: "currency",
                    currency: "GBP"
                }).format(balance)}</h2>
                <p>Sendo balance</p>
            </div>
        </section>
        // <center><div className={styles.balance}><span className={styles.this}>£</span>{balance}</div></center>

    );
}

export default Balance;