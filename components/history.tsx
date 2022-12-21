import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { deletecontact } from '../pages/util/api';
import { gettransactions } from '../pages/util/api';
import Balance from './balance';
interface Transfers{
  message: String,
  amount: Number,
  id: Number,
  transferredAt: String,
  recipient: {
    user: {
      username: String
    }
  },
 sender: {
    user: {
      username: String
    }
  }
}

const History = () => {
  const [transactionList, setTransactionList] = useState([])

  useEffect(() => {
    gettransactions().then((data)=> {
      console.log(data)
      setTransactionList(data);
    })
  }, [])

    return (
      
      <div className={styles.grid}>
        

        {/* Existing Contacts */}
      <div className={styles.ccard}>
        
        <h1>Transaction History</h1>
        <br/>

        {transactionList.map((obj: Transfers) => {
          return(
      <div key={Number(obj.id)}className={styles.card}>
          <center>
            <p className={styles.historyp}>£<span>{Number(obj.amount)}</span> <span>{(obj.transferredAt).slice(0,10)}</span></p>
            <br/>
            {obj.recipient && <p className={styles.historyp}>Recipient: <span>{obj.recipient.user.username}</span></p>}
            {obj.sender && <p className={styles.historyp}>Sender: <span>{obj.sender.user.username}</span></p>}
            <br/>
            <p className={styles.historyp}>Message: '{obj.message}'</p>
            <br/>
          </center>
      </div>
          )
        })}

{/* {Number(obj.transfer.amount)} */}
          {/* <center>
            <p className={styles.historyp}>£<span>1.00</span> <span>(date)</span></p>
            <br/>
            <p className={styles.historyp}>From <span>Example</span></p>
            <br/>
            <p className={styles.historyp}>Message!</p>

          </center> */}
        


     
        <br/>
        </div>
 
    </div>

    );
}

export default History;