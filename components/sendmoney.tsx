import styles from '../styles/Home.module.css'
import { login } from '../pages/util/api';
import { useState } from 'react';
import { sendMoney } from '../pages/util/api';

const Sendmoney = () => {
    const [amount, setamount] = useState (0)
    const [message, setmessage] = useState ('')
    const [recipient, setrecipient] = useState ('')
    
    
    
    return (
      
 <div>
 
 
        <center><form className={styles.form}>
            {/* Amount */}
            <h1>Send Money:</h1>
            <br/>
            {/* Number Input */}
            <div><input  className={styles.emailbox} type="text" placeholder="Username" onChange={(e) => {setrecipient(e.target.value)}}/></div>
            <br/>
            <div><input  className={styles.emailbox} type="number" placeholder="Amount" onChange={(e) => {setamount(Number(e.target.value))}}/></div>
            <br/>
            <div><input  className={styles.emailbox} type="text" placeholder="Message" onChange={(e) => {setmessage(e.target.value)}}/></div>
            <br/><br/>
            <div><button onClick={(e)=> {e.preventDefault(); sendMoney(amount, message, recipient)}} className={styles.signinbutton} type="submit">Submit</button></div>

        </form></center>
        <br/>

 </div>

    );
}

export default Sendmoney;