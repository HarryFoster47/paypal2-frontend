import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { deletecontact } from '../pages/util/api';
import { getcontacts, addcontact } from '../pages/util/api';
interface Contact{
  contact: {
    username: String,
  }
}

const Contacts = () => {

  const [contact, setContact] = useState("");
  const [contactList, setContactList] = useState([])

  useEffect(()=>{
    getcontacts().then(data => {
      console.log(data);
      setContactList(data);
    })
  }, [contact])

    return (
      
      <div className={styles.grid}>

        {/* Existing Contacts */}
      <div className={styles.ccard}>
        <h1>Contacts</h1>

        {contactList.map((obj: Contact) => {
          return(
            <center><h2>{obj.contact.username}</h2>
          <Link href='transfer'><button className={styles.signinbutton} type="submit">Send</button></Link>
         <button className={styles.signinbutton} type="submit">Delete</button>
          
        </center>
          );
          })}

        <br></br>
        </div>

        {/* Add Contact */}
      <div className={styles.ccard}>
        <h1>Add Contact</h1>
        <input  className={styles.emailbox} type="username" placeholder="username" onChange={(e)=>setContact(e.target.value)}/>
        <br/><br/><br/>
        <button onClick={(e)=>{ e.preventDefault(); addcontact(contact)}} className={styles.signinbutton} type="submit">Send Request</button>
        <br/><br/>
      </div>
 
    </div>

    );
}

export default Contacts;