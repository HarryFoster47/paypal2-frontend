import { useState } from "react";
import Link from "next/link";
import { login } from "../../util/api";

import styles from "../../styles/components/Forms.module.css";
import Router from "next/router";

const LoginForm = () => {
	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");
	return (
		<section className={styles.center}>
			<form className={styles.form}>
				<h1>Login</h1>
				<section className={styles.inputs}>
					<input
						className={styles.input}
						type="text"
						name="username"
						placeholder="username"
						onChange={(e) => {
							setusername(e.target.value);
						}}
					/>
					<input
						className={styles.input}
						type="password"
						name="password"
						placeholder="password"
						onChange={(e) => {
							setpassword(e.target.value);
						}}
					/>
				</section>
				<Link href="/register">
					<p className={styles.noaccount}>
						I don't have an account?
						<br />
						Register here
					</p>
				</Link>
				<button
					onClick={function (e) {
						e.preventDefault();
						login(username, password).then((err) => {
							if (err) return;
							Router.push("/");
						});
					}}
					className={styles.submit}
					type="submit"
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default LoginForm;
