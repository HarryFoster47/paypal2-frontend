import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Login = () => {
    return (
      
 <div>
 
 
        <center><form>
            <h1>Please Sign In:</h1>
            <br/>
            <div><input  className={styles.emailbox} type="email" placeholder="name@example.com" /></div>
            <br/>
            <div><input className={styles.passwordbox} type="password" placeholder="Password" /></div>
            <br/><br/>
            <div><label><input className={styles.rememberme} type="checkbox" value="remember-me" /> Remember me</label></div>
            <br/>
            <div><button className={styles.signinbutton} type="submit">Sign in</button></div>
        </form></center>
        <br/>
      <center><p>(register button here)</p></center>

 </div>

    );
}

export default Login;