import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { deletecontact } from '../pages/util/api';
import { gettransactions } from '../pages/util/api';
import Balance from './balance';

const History = () => {
  const [transactionList, setTransactionList] = useState([])

  useEffect(() => {
    gettransactions().then((data)=> {
      console.log(data)
    })
  })
    return (
      
      <div className={styles.grid}>
        

        {/* Existing Contacts */}
      <div className={styles.ccard}>
        
        <h1>Transaction History</h1>

        <div className={styles.card}>
          <center>
            <p className={styles.historyp}>£<span>1.00</span> <span>(date)</span></p>
            <br/>
            <p className={styles.historyp}>From <span>Example</span></p>
            <br/>
            <p className={styles.historyp}>Message!</p>

          </center>
        </div>


     
        <br/>
        </div>
 
    </div>

    );
}

export default History;