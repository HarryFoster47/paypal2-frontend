import { useState } from 'react';
import { register } from '../pages/util/api';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Router from 'next/router';

const Register = () => {
    const [username, setusername] = useState ('')
    const [email, setemail] = useState ('')
    const [password, setpassword] = useState ('')
    return (
      
 <div>
 
 
        <center><form className={styles.form}>
            {/* Register Form */}
            <h1>Please Register:</h1>
            <Link href='/login'><h3 className={styles.noaccount}>Already have an account?</h3></Link>
            <br/>
            <div><input  className={styles.emailbox} type="text" placeholder="Username" onChange={(e)=>{setusername(e.target.value)}}/></div>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="email" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value)}} /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} /></div>
            <br/>
            <br/>
            <div><button onClick={function(e) {
                e.preventDefault()
                register(email, username, password).then(()=>{
                    Router.push('/login')
                })
            }

            } className={styles.signinbutton} type="submit">Register</button></div>
        </form></center>
        <br/>

 </div>

    );
}

export default Register;