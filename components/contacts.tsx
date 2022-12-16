import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Contacts = () => {
    return (
      
      <div className={styles.grid}>

        {/* Existing Contacts */}
      <div className={styles.ccard}>
        <h1>Contacts</h1>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <center><h2>John Smith <button className={styles.signinbutton} type="submit">Send</button></h2></center>
        <br></br>
        </div>

        {/* Add Contact */}
      <div className={styles.ccard}>
        <h1>Add Contact</h1>
        <input  className={styles.emailbox} type="username" placeholder="username" />
        <br/><br/><br/>
        <button className={styles.signinbutton} type="submit">Send Request</button>
        <br/><br/>
      </div>
 
    </div>

    );
}

export default Contacts;