import styles from '../styles/Home.module.css'
import { login } from '../pages/util/api';

const Login = () => {
    return (
      
 <div>
 
 
        <center><form>
            {/* Login Form */}
            <h1>Please Sign In:</h1>
            <br/>
            {/* Email Input */}
            <div><input  className={styles.emailbox} type="email" placeholder="name@example.com" /></div>
            <br/>
            {/* Password Input */}
            <div><input className={styles.passwordbox} type="password" placeholder="Password" /></div>
            <br/><br/>
            <div><label><input className={styles.rememberme} type="checkbox" value="remember-me" /> Remember me</label></div>
            <br/>
            <div><button onClick={function(e) {
                e.preventDefault() 
                login('person', 'password123')
            }} className={styles.signinbutton} type="submit">Sign in</button></div>
        </form></center>
        <br/>
      <center><p>(register button here)</p></center>

 </div>

    );
}

export default Login;