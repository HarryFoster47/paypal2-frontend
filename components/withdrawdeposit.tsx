import styles from '../styles/Home.module.css'
import { login } from '../pages/util/api';
import { useState } from 'react';
import { withdraw } from '../pages/util/api';
import { deposit } from '../pages/util/api';

const Withdrawdeposit = () => {
    const [amount, setamount] = useState (0)
   
    return (
      
 <div>
 
 
        <center><form className={styles.form}>
            {/* Amount */}
            <h1>Withdraw/Deposit:</h1>
            <br/>
            {/* Number Input */}
            <div><input  className={styles.emailbox} type="number"  placeholder="Amount" onChange={(e)=>{setamount(Number(e.target.value))}}/></div>
            <br/><br/>
            <div><button onClick={function(e) {
              e.preventDefault()
              withdraw(amount)
            }} className={styles.signinbutton} type="submit">Withdraw</button></div>
            <br/>
            <div><button onClick={(e)=> {
                e.preventDefault()
                deposit(amount)
            }} className={styles.signinbutton} type="submit">Deposit</button></div>
        </form></center>
        <br/>

 </div>

    );
}

export default Withdrawdeposit;