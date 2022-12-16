import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Register = () => {
    return (
      
 <div>
 
 
        <center><form>
            {/* Register Form */}
            <h1>Please Register:</h1>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="email" placeholder="name@example.com" /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" /></div>
            <br/><br/>
            <div><label><input className={styles.rememberme} type="checkbox" value="remember-me" /> Remember me</label></div>
            <br/>
            <div><button className={styles.signinbutton} type="submit">Register</button></div>
        </form></center>
        <br/>
      <center><p>(register button here)</p></center>

 </div>

    );
}

export default Register;