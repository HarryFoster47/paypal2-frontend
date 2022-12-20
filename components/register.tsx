import { useState } from 'react';
import { register } from '../pages/util/api';
import styles from '../styles/Home.module.css'

const Register = () => {
    const [username, setusername] = useState ('')
    const [email, setemail] = useState ('')
    const [password, setpassword] = useState ('')
    return (
      
 <div>
 
 
        <center><form>
            {/* Register Form */}
            <h1>Please Register:</h1>
            <br/>
            <div><input  className={styles.emailbox} type="text" placeholder="Username" onChange={(e)=>{setusername(e.target.value)}}/></div>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="email" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value)}} /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} /></div>
            <br/><br/>
            <div><label><input className={styles.rememberme} type="checkbox" value="remember-me" /> Remember me</label></div>
            <br/>
            <div><button onClick={function(e) {
                e.preventDefault()
                register(email, username, password).then(console.log)
            }

            } className={styles.signinbutton} type="submit">Register</button></div>
        </form></center>
        <br/>
      <center><p>(register button here)</p></center>

 </div>

    );
}

export default Register;