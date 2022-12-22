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
      
      <div>
      <div className={styles.cgrid}>

        {/* Existing Contacts */}
      <div className={styles.ccard}>
        <h1>Your Contacts</h1>

        {contactList.map((obj: Contact) => {
          return(
            <div className={styles.cccard}>
            <center key={Number(obj.id)}>
              <h2>{obj.contact.username}&#160;&#160;&#160;
              
              <button className={styles.csendbutton} type="submit">Send</button>
              &#160;
              <button onClick={(e)=>{deletecontact(obj.contact.username).then(()=>{
          setContactList((list)=>{
            return (list as Contact[]).filter(c=>c.id !== obj.id) as never[]
          })
         })} }className={styles.cdelbutton} type="submit">Delete</button>
              </h2>
        </center>
        </div>
          );
          })}

        <br></br>
        </div>

        {/* Add Contact */}
      <div className={styles.addccard}>
        <h1>Add a Contact</h1>
        <input  className={styles.emailbox} type="username" placeholder=" Username" onChange={(e)=>setContact(e.target.value)}/>
        <br/><br/><br/>
        <button onClick={(e)=>{ addcontact(contact)}} className={styles.signinbutton} type="submit">Add Contact</button>
        <br/><br/><br/>
      </div>
 
    </div>
    </div>
    );
}

export default Contacts;