import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { getcontacts, addcontact, deletecontact  } from '../pages/util/api';
interface Contact{
  id: Number,
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
      if (!data) return 
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
            <div className={styles.ccard}>
            <center key={Number(obj.id)}><h2>{obj.contact.username}</h2>
          <Link href='transfer'><button className={styles.signinbutton} type="submit">Send</button></Link>
         <button onClick={(e)=>{deletecontact(obj.contact.username).then(()=>{
          setContactList((list)=>{
            return (list as Contact[]).filter(c=>c.id !== obj.id) as never[]
          })
         })} }className={styles.signinbutton} type="submit">Delete</button>
          
        </center>
        </div>
          );
          })}

        <br></br>
        </div>

        {/* Add Contact */}
      <div className={styles.ccard}>
        <h1>Add Contact</h1>
        <input  className={styles.emailbox} type="username" placeholder="username" onChange={(e)=>setContact(e.target.value)}/>
        <br/><br/><br/>
        <button onClick={(e)=>{ addcontact(contact)}} className={styles.signinbutton} type="submit">Send Request</button>
        <br/><br/>
      </div>
 
    </div>

    );
}

export default Contacts;