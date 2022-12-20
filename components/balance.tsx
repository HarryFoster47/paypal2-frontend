import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { getbalance } from '../pages/util/api';

const Balance = () => {
    const [balance, setbalance] = useState (0)
    useEffect (()=>{
        getbalance().then(data=>{
            console.log(data)
            setbalance(data)
        })
    }, [balance])
    return (
    
        <center><div className={styles.balance}><span className={styles.this}>£</span>{balance}</div></center>

    );
}

export default Balance;