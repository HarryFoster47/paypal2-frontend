import styles from '../styles/Home.module.css'
import { login } from '../pages/util/api';
import { useState } from 'react';

const Login = () => {
    const [username, setusername] = useState ('')
    const [password, setpassword] = useState ('')
    return (
      
 <div>
 
 
        <center><form>
            {/* Login Form */}
            <h1>Please Sign In:</h1>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="text" placeholder="Username" onChange={(e)=>{setusername(e.target.value)}} /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} /></div>
            <br/><br/>
            <div><label><input className={styles.rememberme} type="checkbox" value="remember-me" /> Remember me</label></div>
            <br/>
            <div><button onClick={function(e) {
                e.preventDefault() 
              const error = login(username, password)
              console.log (error)
            }} className={styles.signinbutton} type="submit">Sign in</button></div>
        </form></center>
        <br/>
      <center><p>(register button here)</p></center>

 </div>

    );
}

export default Login;