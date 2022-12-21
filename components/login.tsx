import styles from '../styles/Home.module.css'
import { login } from '../pages/util/api';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [username, setusername] = useState ('')
    const [password, setpassword] = useState ('')
    return (
      
 <div>
 
 
        <center><form className={styles.form}>
            {/* Login Form */}
            <h1>Please Sign In:</h1>
            <Link href='/register'><h3 className={styles.noaccount}>I don't have an account</h3></Link>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="text" placeholder="Username" onChange={(e)=>{setusername(e.target.value)}} /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} /></div>
            <br/>
            <br/>
            <div><button onClick={function(e) {
                e.preventDefault() 
              const error = login(username, password)
              console.log (error)
            }} className={styles.signinbutton} type="submit">Sign in</button></div>
        </form></center>
        <br/>
      

 </div>

    );
}

export default Login;